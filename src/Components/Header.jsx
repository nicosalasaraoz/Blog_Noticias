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
      <Container className="d-flex justify-content-evenly">
        <div className="container-fluid ">
          <Navbar bg="light" className="">
            <Desplegable />
            <Navbar.Brand href="#home">
              <img
                src="./images/logo.png"
                alt="logo"
                height="60"
                className=""
              />
            </Navbar.Brand>
            <div className="">
              <nav>
              <ul>
                <li>
                  <Link to="/error404" className="icono-header text-center m-2">
                    <FaFacebookF />
                  </Link>
                  <Link to="/error404" className="icono-header text-center m-2">
                    <FaTwitter />
                  </Link>
                  <Link to="/error404" className="icono-header text-center m-2">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
                <small>
                <Form>
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
                </small>
                </nav>
            </div>
          </Navbar>
        </div>
      </Container>
      <Container>
        <div className="fluid h-50">
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
