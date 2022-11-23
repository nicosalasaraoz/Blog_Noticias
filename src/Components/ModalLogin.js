import { Formik } from "formik";
import React from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalLogin = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <b>Bienvenido!</b>
        </Modal.Title>
      </Modal.Header>
      <Container>
        <Formik initialValues={{ email: "", pass: "" }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail1">
                <Form.Label name="email" values={values.email}>
                  Ingresa tu email
                </Form.Label>
                <Form.Control type="email" placeholder="rollingFan@gmail.com" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label name="pass" values={values.pass}>
                  Contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nunca compartas tu contraseña"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Modal.Footer>
                <Button type="submit" variant="primary" onClick={handleClose}>
                  Guardar cambios
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Container>
    </Modal>
  );
};

export default ModalLogin;
