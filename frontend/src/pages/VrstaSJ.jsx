// VrstaSJ.jsx
import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  Modal,
  Form,
  Row,
  Col,
  Pagination,
} from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { vrstaSJAPI } from "../services/api";

const schema = yup.object().shape({
  naziv: yup.string().required("Naziv is required"),
  vrsta: yup.string().required("Vrsta is required"),
  oznaka: yup.string().required("Oznaka is required"),
  oznakaPMS: yup.string().required("Oznaka PMS is required"),
  oznakaBooking: yup.string().required("Oznaka Booking is required"),
  pmsId: yup.string().required("PMS ID is required"),
  bookingId: yup.string().required("Booking ID is required"),
  bookingCjenik: yup.string().required("Booking Cjenik is required"),
  maxOdraslih: yup
    .number()
    .required("Max odraslih is required")
    .positive()
    .integer(),
  maxDjece: yup.number().required("Max djece is required").positive().integer(),
  boja: yup.string().required("Boja is required"),
  slike: yup.array().of(yup.string()).required(),
});

const VrstaSJ = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const response = await vrstaSJAPI.getAll();
      setData(response.data);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setEditIndex(null);
  };

  const handleSave = async (values) => {
    try {
      if (editIndex !== null) {
        const itemToUpdate = data[editIndex];
        await vrstaSJAPI.update(itemToUpdate.id, values);
      } else {
        await vrstaSJAPI.create(values);
      }
      await loadData();
      handleClose();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    handleShow();
  };

  const handleDelete = async (index) => {
    if (window.confirm("Jeste li sigurni da želite obrisati ovaj zapis?")) {
      try {
        const itemToDelete = data[index];
        await vrstaSJAPI.delete(itemToDelete.id);
        await loadData();
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const initialValues =
    editIndex !== null
      ? {
          ...data[editIndex],
          slike: data[editIndex].slike || Array(8).fill(""),
        }
      : {
          naziv: "",
          vrsta: "",
          oznaka: "",
          oznakaPMS: "",
          oznakaBooking: "",
          pmsId: "",
          bookingId: "",
          bookingCjenik: "",
          maxOdraslih: "",
          maxDjece: "",
          boja: "#ffffff",
          slike: Array(8).fill(""),
        };

  return (
    <div className="container mt-4 vrsta-sj">
      <h1>Vrsta Smještajnih Jedinica</h1>
      <Button variant="primary" onClick={handleShow}>
        <i className="fas fa-plus"></i>{" "}
        <span className="d-none d-lg-inline">Dodaj podatke</span>
      </Button>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mt-3 mb-3 flex-wrap">
            <div>
              <label htmlFor="itemsPerPage" className="me-2">
                Broj vrsta po stranici:
              </label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="form-select form-select-sm d-inline-block w-auto"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            <div>
              Prikazano {indexOfFirstItem + 1} -{" "}
              {Math.min(indexOfLastItem, data.length)} od {data.length}
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Naziv</th>
                <th>Vrsta</th>
                <th className="d-none d-md-table-cell">Booking ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.naziv}</td>
                    <td>{item.vrsta}</td>
                    <td className="d-none d-md-table-cell">{item.bookingId}</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        className="mb-2 mb-md-0 me-2"
                        onClick={() => handleEdit(index)}
                      >
                        <i className="fas fa-edit"></i>{" "}
                        <span className="d-none d-lg-inline">Edit</span>
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        className="mb-2 mb-md-0"
                        onClick={() => handleDelete(index)}
                      >
                        <i className="fas fa-trash-alt"></i>{" "}
                        <span className="d-none d-lg-inline">Delete</span>
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">
                    Nema podataka
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <Pagination className="justify-content-center">
            <Pagination.First
              onClick={() => paginate(1)}
              disabled={currentPage === 1}
            />
            <Pagination.Prev
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(
              (number) => (
                <Pagination.Item
                  key={number + 1}
                  active={number + 1 === currentPage}
                  onClick={() => paginate(number + 1)}
                >
                  {number + 1}
                </Pagination.Item>
              )
            )}
            <Pagination.Next
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            />
            <Pagination.Last
              onClick={() => paginate(Math.ceil(data.length / itemsPerPage))}
              disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            />
          </Pagination>
        </>
      )}

      <Modal show={showModal} onHide={handleClose}>
        <Formik
          validationSchema={schema}
          onSubmit={handleSave}
          initialValues={initialValues}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {editIndex !== null ? "Modifikuj podatke" : "Dodaj podatke"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationFormikNaziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control
                      type="text"
                      name="naziv"
                      value={values.naziv}
                      onChange={handleChange}
                      isInvalid={touched.naziv && !!errors.naziv}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.naziv}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationFormikVrsta">
                    <Form.Label>Vrsta</Form.Label>
                    <Form.Select
                      name="vrsta"
                      value={values.vrsta}
                      onChange={handleChange}
                      isInvalid={touched.vrsta && !!errors.vrsta}
                    >
                      <option value="">Select Vrsta</option>
                      <option value="P">Parcela</option>
                      <option value="M">Mobilna kućica</option>
                      <option value="G">Glamping</option>
                      <option value="S">Šator</option>
                      <option value="A">Apartman</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.vrsta}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationFormikOznaka">
                    <Form.Label>Oznaka</Form.Label>
                    <Form.Control
                      type="text"
                      name="oznaka"
                      value={values.oznaka}
                      onChange={handleChange}
                      isInvalid={touched.oznaka && !!errors.oznaka}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.oznaka}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationFormikOznakaPMS">
                    <Form.Label>Oznaka PMS</Form.Label>
                    <Form.Control
                      type="text"
                      name="oznakaPMS"
                      value={values.oznakaPMS}
                      onChange={handleChange}
                      isInvalid={touched.oznakaPMS && !!errors.oznakaPMS}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.oznakaPMS}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    controlId="validationFormikOznakaBooking"
                  >
                    <Form.Label>Oznaka Booking</Form.Label>
                    <Form.Control
                      type="text"
                      name="oznakaBooking"
                      value={values.oznakaBooking}
                      onChange={handleChange}
                      isInvalid={
                        touched.oznakaBooking && !!errors.oznakaBooking
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.oznakaBooking}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationFormikPmsId">
                    <Form.Label>PMS ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="pmsId"
                      value={values.pmsId}
                      onChange={handleChange}
                      isInvalid={touched.pmsId && !!errors.pmsId}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.pmsId}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationFormikBookingId">
                    <Form.Label>Booking ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="bookingId"
                      value={values.bookingId}
                      onChange={handleChange}
                      isInvalid={touched.bookingId && !!errors.bookingId}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.bookingId}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="validationFormikBookingCjenik"
                  >
                    <Form.Label>Booking Cjenik</Form.Label>
                    <Form.Control
                      type="text"
                      name="bookingCjenik"
                      value={values.bookingCjenik}
                      onChange={handleChange}
                      isInvalid={
                        touched.bookingCjenik && !!errors.bookingCjenik
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.bookingCjenik}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationFormikMaxOdraslih">
                    <Form.Label>Max Odraslih</Form.Label>
                    <Form.Control
                      type="number"
                      name="maxOdraslih"
                      value={values.maxOdraslih}
                      onChange={handleChange}
                      isInvalid={touched.maxOdraslih && !!errors.maxOdraslih}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.maxOdraslih}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationFormikMaxDjece">
                    <Form.Label>Max Djece</Form.Label>
                    <Form.Control
                      type="number"
                      name="maxDjece"
                      value={values.maxDjece}
                      onChange={handleChange}
                      isInvalid={touched.maxDjece && !!errors.maxDjece}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.maxDjece}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationFormikBoja">
                    <Form.Label>Boja</Form.Label>
                    <Form.Control
                      type="color"
                      name="boja"
                      value={values.boja}
                      onChange={handleChange}
                      isInvalid={touched.boja && !!errors.boja}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.boja}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                {/* Image upload fields */}
                <Row className="mb-3">
                  {Array.from({ length: 8 }, (_, index) => (
                    <Col key={index} xs={6} md={3} className="mb-3">
                      <Form.Group
                        controlId={`validationFormikSlika${index + 1}`}
                      >
                        <Form.Label>Slika {index + 1}</Form.Label>
                        <Form.Control
                          type="file"
                          name={`slika${index + 1}`}
                          onChange={(e) =>
                            handleImageUpload(e, `slika${index + 1}`)
                          }
                        />
                      </Form.Group>
                    </Col>
                  ))}
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  <i className="fas fa-times"></i>{" "}
                  <span className="d-none d-lg-inline">Zatvori</span>
                </Button>
                <Button type="submit" variant="primary">
                  <i className="fas fa-save"></i>{" "}
                  <span className="d-none d-lg-inline">Snimi</span>
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default VrstaSJ;
