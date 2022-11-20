import React, { useState } from "react";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import ModalRegistro from "./ModalRegistro";

const NavbarMain = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [registro, setRegistro] = useState(false);

  const handleCerrar = () => setRegistro(false);
  const handleMostrar = () => setRegistro(true);
  return (
    <>
      <Navbar bg="light" expand="lg" className="d-flex justify-content-around">
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
            <Nav className="">
              <Nav.Link className="text-dark" href="#home">
                <b>Home</b>
              </Nav.Link>
              <Nav.Link className="text-dark" href="#features">
                <b>Destacado</b>
              </Nav.Link>
              <Nav.Link className="text-dark" href="#pricing">
                <b>Contacto</b>
              </Nav.Link>
              <div className="d-flex justify-content-start">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar..."
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
                  className="d-flex align-items-center mx-1"
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
                  className="d-flex align-items-center mx-1"
                  onClick={handleShow}
                >
                  <div className="icono-login">
                    <ion-icon name="log-in-outline"></ion-icon>
                  </div>
                  <p className="m-1">
                    <b>Login</b>
                  </p>
                </Button>
                <Button
                  variant="primary"
                  className="mx-1"
                  onClick={handleMostrar}
                >
                  <p className="m-1">
                    <b>Registrarse</b>
                  </p>
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalLogin show={show} handleClose={handleCerrar} />
      <ModalRegistro registro={registro} handleClose={handleCerrar} />

      {/* MODAL REGISTRO */}
    </>
  );
};

export default NavbarMain;
