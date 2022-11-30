import React from "react";
import {
  Carousel,
  Button,
  Container,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Desplegable from "./Desplegable";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="d-flex justify-content-start">
        <Container>
          <Desplegable />
          <Navbar.Brand href="#home">
            <img
              src="./images/logo.png"
              alt="logo"
              height="80"
              className="pt-3 ms-2"
            />
          </Navbar.Brand>
          <Nav>
            <ul className="d-fluid justify-content-around pt-3">
              <li className="d-flex justify-content-center">
                <Link to="/error404" className="icono-header text-center">
                  <FaFacebookF />
                </Link>
                <Link to="/error404" className="icono-header text-center">
                  <FaTwitter />
                </Link>
                <Link to="/error404" className="icono-header text-center">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
            <div class="d-flex justify-content-center">
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
            </div>
          </Nav>
        </Container>
      </Navbar>
      <Container className="fluid h-50">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 slider-size"
              src="../images/covid.jpg"
              alt=""
            />
            <Carousel.Caption>
              <h3>Los casos de covid-19 aumentaron un 50% en Tucumán</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 h-50"
              src="../images/enfermeria.jpg"
              alt=""
            />
            <Carousel.Caption>
              <h3>
                Enfermería: exigen que se acelere el pase de escuela a facultad
                y temen que se trunque el proyecto
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="../images/soja.jpg"
              alt=""
            />
            <Carousel.Caption>
              <h3>
                El Banco Central compró U$S192 millones tras la puesta en marcha
                del dólar soja
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Link to="/Error404">
        <Button
          variant="outline-secondary"
          className="d-flex align-items-center mx-1 mb-2"
          size="sm"
        >
          mandarme al error404
        </Button>
      </Link>
    </>
  );
};

export default Header;
