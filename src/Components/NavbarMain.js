import React, { useState } from "react";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="d-flex">
        <Container>
          <Link to="/">
            <img
              src="./images/logo.png"
              alt="logo"
              height="80"
              className="pt-3 ms-2"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-dark" href="#home">
                <b>Home</b>
              </Nav.Link>
              <Nav.Link className="text-dark" href="#features">
                <b>Destacado</b>
              </Nav.Link>
              <Nav.Link className="text-dark" href="#pricing">
                <b>Contacto</b>
              </Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar noticias"
                  className="me-2"
                  aria-label="Search"
                />
                <Button>
                  <div className="icono-busqueda">
                    <ion-icon
                      className="icono-busqueda"
                      name="search-outline"
                    ></ion-icon>
                  </div>
                </Button>
              </Form>
              <Button
                variant="outline-secondary"
                className="d-flex align-items-center mx-0"
                size="sm"
              >
                <div className="icono-fav">
                  <ion-icon name="star"></ion-icon>
                </div>
                <p className="m-1">
                  <b>Favoritos</b>
                </p>
              </Button>
              <Button
                variant="danger"
                className="d-flex align-items-center mx-0"
                onClick={handleShow}
              >
                <div className="icono-login">
                  <ion-icon name="log-in-outline"></ion-icon>
                </div>
                <p className="m-1">
                  <b>Login</b>
                </p>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Bienvenido!</b>
          </Modal.Title>
        </Modal.Header>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavbarMain;
