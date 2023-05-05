import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalLogin from "../views/ModalLogin";
import ModalRegistro from "../views/ModalRegistro";

const NavbarMain = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <div className="d-flex justify-content-center">
                  <div className="icono-call text-dark mb-1 mx-2">
                    <Link
                      to="/PaginaContacto"
                      className="text-white"
                      style={{ textDecoration: "none" }}>
                      <ion-icon name="call"></ion-icon>
                    </Link>
                  </div>
                  <div className="icono-home  text-dark mb-1 mx-2">
                    <Link
                      to="/"
                      className="text-white"
                      style={{ textDecoration: "none" }}>
                      <ion-icon name="home"></ion-icon>
                    </Link>
                  </div>
              </div>
            </Nav>
            <Container>
              <Form className="d-flex justify-content-center no-wrap ocultar-buscador">
                <Form.Control
                  type="search"
                  placeholder="Buscar..."
                  className="me-2 mb-2"
                  aria-label="Search"
                  size="sm"
                  // value={search}
                  // onChange={(e) => setSearch(e.target.value)}
                />
                {/* <Link to={`/search=${search}`}> */}
                  {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                {/* </Link> */}
              </Form>
            </Container>
            <Nav>
              <Button
                variant="outline-secondary"
                className="d-flex align-items-center justify-content-center mx-1 mb-2 btn-nav"
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
                className="d-flex align-items-center justify-content-center mx-1 mb-2 btn-nav"
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
                className="d-flex align-items-center justify-content-center mx-1 mb-2 btn-nav"
                onClick={handleMostrar}
              >
                <p className="m-1">
                  <b>Registrarse</b>
                </p>
              </Button>
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
                  <a
                    href="https://www.lavoz.com.ar/temas/exclusivo/"
                    className="fw-bold fs-6 text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Contenido Exclusivo
                  </a>
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
