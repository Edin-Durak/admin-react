// VrstaSJ.jsx
import React, { useState } from "react";
import { Button, Table, Modal, Form, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

// Validation schema for form fields
const schema = yup.object().shape({
  naziv: yup.string().required("Naziv is required"),
  vrsta: yup.string().required("Vrsta is required"),
  oznaka: yup.string().required("Oznaka is required"),
  oznakaPMS: yup.string().optional(),
  oznakaBooking: yup.string().optional(),
  pmsId: yup.string().optional(),
  bookingId: yup.string().optional(),
  bookingCjenik: yup.string().optional(),
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

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setEditIndex(null); // Reset on close
  };

  const handleSave = (values) => {
    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = values;
      setData(updatedData);
    } else {
      setData([...data, values]);
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setEditIndex(index); // Set index for editing
    handleShow();
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const initialValues =
    editIndex !== null
      ? data[editIndex]
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
          boja: "#ffffff", // Default color
          slike: Array(8).fill(""), // Array for 8 images
        };

  return (
    <div className="container mt-4 vrsta-sj">
      <h1>Vrsta Smještajnih Jedinica</h1>
      <Button variant="primary" onClick={handleShow}>
        <i className="fas fa-plus"></i>{" "}
        <span className="d-none d-lg-inline">Dodaj podatke</span>
      </Button>

      <Table className="mt-4">
        <thead>
          <tr>
            <th>Naziv</th>
            <th>Vrsta</th>
            <th>Oznaka</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.naziv}</td>
                <td>{item.vrsta}</td>
                <td>{item.oznaka}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleEdit(index)}
                  >
                    <i className="fas fa-edit"></i>{" "}
                    <span className="d-none d-lg-inline">Edit</span>
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-2"
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
              <td colSpan="4" className="text-center">
                Nema podataka
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Modal for adding/editing entries */}
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
                  {editIndex !== null ? "Edit Entry" : "Add Entry"}
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
                    />
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
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationFormikPmsId">
                    <Form.Label>PMS ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="pmsId"
                      value={values.pmsId}
                      onChange={handleChange}
                    />
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
                    />
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
                    />
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
                  <span className="d-none d-lg-inline">Close</span>
                </Button>
                <Button type="submit" variant="primary">
                  <i className="fas fa-save"></i>{" "}
                  <span className="d-none d-lg-inline">Save Changes</span>
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
