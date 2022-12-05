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
      <Container className="container-fluid">
        <Navbar bg="light" className="">
          <Desplegable />
          <div className="container-fluid justify-content-between">
            <Navbar.Brand href="#home">
              <img
                src="./images/logo.png"
                alt="logo"
                height="60"
                className=""
              />
            </Navbar.Brand>
          </div>
          <div className="container-fluid justify-content-end">
            <nav className="d-flex justify-content-around">
              <small>
                <Form className="ocultar-busqueda">
                  <Form.Control
                    type="search"
                    placeholder="Buscar..."
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
              </small>
              <div className="d-flex align-items-around">
                <ul>
                  <li>
                    <Link
                      to="/error404"
                      className="icono-header text-center m-2"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      to="/error404"
                      className="icono-header text-center m-2"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      to="/error404"
                      className="icono-header text-center m-2"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </Navbar>
      </Container>
      <Container>
        <div className="container-fluid carousel-inner">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src="../images/covid.jpg" alt="" />
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
                  Enfermería: exigen que se acelere el pase de escuela a
                  facultad y temen que se trunque el proyecto
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
                  El Banco Central compró U$S192 millones tras la puesta en
                  marcha del dólar soja
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </>
  );
};

export default Header;
