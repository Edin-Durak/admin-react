import React, { useState } from "react";
import { Button, Modal, Form, InputGroup, Row, Col } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import "../css/main.css";
import "../css/brojSJ.css";
const schema = yup.object().shape({
  broj: yup.string().required("Broj is required"),
  idMapa: yup.string().required("ID na mapi is required"),
  duzina: yup.string().required("Dužina is required"),
  sirina: yup.string().required("Širina is required"),
  iskoristivaDuzina: yup.string().required("Iskoristiva dužina is required"),
  iskoristivaSirina: yup.string().required("Iskoristiva širina is required"),
  maxBrojOdraslih: yup
    .number()
    .required("Max broj odraslih is required")
    .positive()
    .integer(),
  maxBrojDjece: yup
    .number()
    .required("Max broj djece is required")
    .positive()
    .integer(),
  vrsta: yup.string().required("Vrsta is required"),
  osuncanost: yup.string().required("Osuncanost is required"),
  podloga: yup.string().required("Podloga is required"),
  napomena: yup.string().optional(),
  wifi: yup.boolean().optional(),
  parking: yup.boolean().optional(),
  struja6A: yup.boolean().optional(),
  struja10A: yup.boolean().optional(),
  struja16A: yup.boolean().optional(),
  prikljucakVode: yup.boolean().optional(),
  odvodnja: yup.boolean().optional(),
});

const BrojSJ = () => {
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

  return (
    <div className="container mt-4 brojSJ">
      <h1>Broj smještajnih jedinica</h1>
      <Button variant="primary" onClick={handleShow}>
        <i className="fas fa-plus"></i>{" "}
        <span className="d-none d-lg-inline">Dodaj podatke</span>
      </Button>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Broj</th>
            <th>ID Mapa</th>
            <th>Vrsta</th>
            <th>Osuncanost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.broj}</td>
                <td>{item.idMapa}</td>
                <td>{item.vrsta}</td>
                <td>{item.osuncanost}</td>

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
              <td colSpan="5" className="text-center">
                Nema podataka
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for Add/Edit */}
      <Modal show={showModal} onHide={handleClose}>
        <Formik
          validationSchema={schema}
          onSubmit={handleSave}
          initialValues={
            editIndex !== null
              ? data[editIndex]
              : {
                  broj: "",
                  idMapa: "",
                  duzina: "",
                  sirina: "",
                  iskoristivaDuzina: "",
                  iskoristivaSirina: "",
                  maxBrojOdraslih: "",
                  maxBrojDjece: "",
                  vrsta: "",
                  osuncanost: "",
                  podloga: "",
                  panoramaSlika: "",
                  slike: Array(8).fill(""),
                  dostupna: false,
                  samoNaUpit: false,
                  pausl: false,
                  noClick: false,
                  header: false,
                  nePrikazujBroj: false,
                  napomena: "",
                  wifi: false,
                  parking: false,
                  struja6A: false,
                  struja10A: false,
                  struja16A: false,
                  prikljucakVode: false,
                  odvodnja: false,
                }
          }
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
                  <Form.Group as={Col} sm={3} controlId="validationFormikBroj">
                    <Form.Label>Broj</Form.Label>
                    <Form.Control
                      type="text"
                      name="broj"
                      value={values.broj}
                      onChange={handleChange}
                      isInvalid={touched.broj && !!errors.broj}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.broj}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    sm={3}
                    controlId="validationFormikIdMapa"
                  >
                    <Form.Label>ID na mapi</Form.Label>
                    <Form.Control
                      type="text"
                      name="idMapa"
                      value={values.idMapa}
                      onChange={handleChange}
                      isInvalid={touched.idMapa && !!errors.idMapa}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.idMapa}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    sm={3}
                    controlId="validationFormikDuzina"
                  >
                    <Form.Label>Dužina</Form.Label>
                    <Form.Control
                      type="text"
                      name="duzina"
                      value={values.duzina}
                      onChange={handleChange}
                      isInvalid={touched.duzina && !!errors.duzina}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.duzina}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    sm={3}
                    controlId="validationFormikSirina"
                  >
                    <Form.Label>Širina</Form.Label>
                    <Form.Control
                      type="text"
                      name="sirina"
                      value={values.sirina}
                      onChange={handleChange}
                      isInvalid={touched.sirina && !!errors.sirina}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.sirina}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md={3}
                    controlId="validationFormikIskoristivaDuzina"
                  >
                    <Form.Label>Iskoristiva Dužina</Form.Label>
                    <Form.Control
                      type="text"
                      name="iskoristivaDuzina"
                      value={values.iskoristivaDuzina}
                      onChange={handleChange}
                      isInvalid={
                        touched.iskoristivaDuzina && !!errors.iskoristivaDuzina
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.iskoristivaDuzina}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md={3}
                    controlId="validationFormikIskoristivaSirina"
                  >
                    <Form.Label>Iskoristiva Širina</Form.Label>
                    <Form.Control
                      type="text"
                      name="iskoristivaSirina"
                      value={values.iskoristivaSirina}
                      onChange={handleChange}
                      isInvalid={
                        touched.iskoristivaSirina && !!errors.iskoristivaSirina
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.iskoristivaSirina}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md={3}
                    controlId="validationFormikMaxBrojOdraslih"
                  >
                    <Form.Label>Max Broj Odraslih</Form.Label>
                    <Form.Control
                      type="text"
                      name="maxBrojOdraslih"
                      value={values.maxBrojOdraslih}
                      onChange={handleChange}
                      isInvalid={
                        touched.maxBrojOdraslih && !!errors.maxBrojOdraslih
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.maxBrojOdraslih}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md={3}
                    controlId="validationFormikMaxBrojDjece"
                  >
                    <Form.Label>Max Broj Djece</Form.Label>
                    <Form.Control
                      type="text"
                      name="maxBrojDjece"
                      value={values.maxBrojDjece}
                      onChange={handleChange}
                      isInvalid={touched.maxBrojDjece && !!errors.maxBrojDjece}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.maxBrojDjece}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationFormikVrsta">
                    <Form.Label>Vrsta SJ</Form.Label>
                    <Form.Select
                      name="vrsta"
                      value={values.vrsta}
                      onChange={handleChange}
                      isInvalid={touched.vrsta && !!errors.vrsta}
                    >
                      <option value="">Select Vrsta</option>
                      <option value="Vrsta 1">Vrsta 1</option>
                      <option value="Vrsta 2">Vrsta 2</option>
                      {/* Dynamic data for vrstaSJ */}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.vrsta}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormikOsuncanost">
                    <Form.Label>Osuncanost</Form.Label>
                    <Form.Select
                      name="osuncanost"
                      value={values.osuncanost}
                      onChange={handleChange}
                      isInvalid={touched.osuncanost && !!errors.osuncanost}
                    >
                      <option value="">Select Osuncanost</option>
                      <option value="osuncan">Osuncan</option>
                      <option value="zastakljeno">Zastakljeno</option>
                      <option value="zastakljeno">Zastakljeno</option>
                      {/* Dynamic data for osuncanost */}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.osuncanost}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationFormikPodloga">
                    <Form.Label>Podloga</Form.Label>
                    <Form.Select
                      name="podloga"
                      value={values.podloga}
                      onChange={handleChange}
                      isInvalid={touched.podloga && !!errors.podloga}
                    >
                      <option value="">Select Podloga</option>
                      <option value="Podloga 1">Podloga 1</option>
                      <option value="Podloga 2">Podloga 2</option>
                      {/* Dynamic data for podloge */}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.podloga}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="validationFormikPanoramaSlika"
                  >
                    <Form.Label>Panorama Slika</Form.Label>
                    <Form.Control
                      type="file"
                      name="panoramaSlika"
                      onChange={(e) => handleImageUpload(e, "panoramaSlika")}
                    />
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

                <Row className="mb-3">
                  <Col xs={12}>
                    <Form.Group className="d-flex flex-wrap">
                      {[
                        { name: "dostupna", label: "Dostupna" },
                        { name: "samoNaUpit", label: "Samo na upit" },
                        { name: "pausl", label: "Paušal" },
                        { name: "noClick", label: "No click" },
                        { name: "header", label: "Header" },
                        { name: "nePrikazujBroj", label: "Ne prikazuj broj" },
                      ].map((item, index) => (
                        <Form.Check
                          key={index}
                          type="checkbox"
                          id={`checkbox-${item.name}`}
                          name={item.name}
                          label={item.label}
                          checked={values[item.name]}
                          onChange={handleChange}
                          className="me-3 mb-2"
                        />
                      ))}
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col xs={12}>
                    <Form.Group className="d-flex flex-wrap">
                      {[
                        { name: "wifi", label: "Wifi" },
                        { name: "parking", label: "Parking" },
                        { name: "struja6A", label: "Struja 6A" },
                        { name: "struja10A", label: "Struja 10A" },
                        { name: "struja16A", label: "Struja 16A" },
                        { name: "prikljucakVode", label: "Priključak vode" },
                        { name: "odvodnja", label: "Odvodnja" },
                      ].map((item, index) => (
                        <Form.Check
                          key={index}
                          type="checkbox"
                          id={`checkbox-${item.name}`}
                          name={item.name}
                          label={item.label}
                          checked={values[item.name]}
                          onChange={handleChange}
                          className="me-3 mb-2"
                        />
                      ))}
                    </Form.Group>
                  </Col>
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

export default BrojSJ;
