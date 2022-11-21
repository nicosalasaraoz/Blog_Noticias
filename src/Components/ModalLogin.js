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
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>Ingresa tu email</Form.Label>
            <Form.Control type="email" placeholder="rollingFan@gmail.com" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nunca compartas tu contraseña"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalLogin;
