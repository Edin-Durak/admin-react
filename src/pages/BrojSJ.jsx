import React, { useState } from "react";
import { Button, Modal, Form, InputGroup, Row, Col } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object().shape({
  broj: yup.string().required("Broj is required"),
  idMapa: yup.string().required("ID Mapa is required"),
  pmsBroj: yup.string().required("PMS Broj is required"),
  vrsta: yup.string().required("Vrsta is required"),
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
    <div className="container mt-4">
      <h1>BrojSJ Page</h1>
      <Button variant="primary" onClick={handleShow}>
        Add New Entry
      </Button>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Broj</th>
            <th>ID Mapa</th>
            <th>PMS Broj</th>
            <th>Vrsta</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.broj}</td>
                <td>{item.idMapa}</td>
                <td>{item.pmsBroj}</td>
                <td>{item.vrsta}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No data available
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
              : { broj: "", idMapa: "", pmsBroj: "", vrsta: "" }
          }
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
                  <Form.Group as={Col} controlId="validationFormikBroj">
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

                  <Form.Group as={Col} controlId="validationFormikIdMapa">
                    <Form.Label>ID Mapa</Form.Label>
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
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationFormikPmsBroj">
                    <Form.Label>PMS Broj</Form.Label>
                    <Form.Control
                      type="text"
                      name="pmsBroj"
                      value={values.pmsBroj}
                      onChange={handleChange}
                      isInvalid={touched.pmsBroj && !!errors.pmsBroj}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.pmsBroj}
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
                      <option value="1">Vrsta 1</option>
                      <option value="2">Vrsta 2</option>
                      {/* Dynamic data for vrstaSJ */}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.vrsta}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save Changes
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
