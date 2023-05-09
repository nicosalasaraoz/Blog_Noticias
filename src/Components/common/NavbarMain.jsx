import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalLogin from "../views/ModalLogin";
import ModalRegistro from "../views/ModalRegistro";
import { FaSistrix } from "react-icons/fa";

const NavbarMain = ({ News, searchState, setSearchState }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [registro, setRegistro] = useState(false);

  const handleCerrar = () => setRegistro(false);
  const handleMostrar = () => setRegistro(true);
  return (
    <>
      <Navbar bg="dark" expand="md" className="bg-navbar">
        <Container className="icon-tog">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="navBarMobile">
            <div className="d-flex justify-content-center">
              <div className="icono-call text-dark mb-1 mx-2">
                <Link to="/" className="navIcons">
                  <ion-icon name="home"></ion-icon>
                  <span className="textNav">Inicio</span>
                </Link>
              </div>
              <div className="icono-call  text-dark mb-1 mx-2">
                <Link to="/PaginaContacto" className="navIcons">
                  <ion-icon name="call"></ion-icon>
                  <span className="textNav">Contacto</span>
                </Link>
              </div>
            </div>
            <Form className="ocultar-buscador">
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2 "
                aria-label="Search"
                size="sm"
                value={searchState}
                onChange={(e) => setSearchState(e.target.value)}
              />
              {searchState ? (
                <Link to="/search" className="SearchIconMobile">
                  <FaSistrix className="d-flex" />
                </Link>
              ) : (
                <Link className="SearchIconMobile">
                  <FaSistrix className="d-flex" />
                </Link>
              )}
            </Form>
            <Nav className="icono-call">
              <div className="navIconsContainer">
                <Link className="navIcons">
                  <ion-icon name="star" className=""></ion-icon>
                  <span className="textNav">Favoritos</span>
                </Link>
                <Link className="navIcons" onClick={handleShow}>
                  <ion-icon name="log-in-outline" size={5}></ion-icon>
                  <span className="textNav">Login</span>
                </Link>
                <Link className="navIcons" onClick={handleMostrar}>
                  <ion-icon name="calendar"></ion-icon>
                  <span className="textNav">Registrarse</span>
                </Link>
              </div>
              <div className="sec-nav">
                <hr className="text-white" />
                <h3 className="text-white fs-5">SECCIONES</h3>
                <div>
                  <Nav.Link className="text-white" eventKey="">
                    Economía
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-3">
                    Deportes
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-4">
                    Mundo
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-5">
                    Espectáculos
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-6">
                    Política
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-7">
                    Opinión
                  </Nav.Link>
                  <Nav.Link
                    href="https://www.lavoz.com.ar/temas/exclusivo/"
                    className="text-white"
                    eventKey="link-8"
                  >
                    Contenido Exclusivo
                  </Nav.Link>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalLogin show={show} handleClose={handleClose} />
      <ModalRegistro registro={registro} handleCerrar={handleCerrar} />
    </>
  );
};

export default NavbarMain;
