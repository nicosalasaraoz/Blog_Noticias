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
import Search from './Search';

const Header = () => {
  return (
    <>
    <Navbar bg="light" className="">
      <Container fluid >
        <div>
        <Desplegable />
      <Navbar.Brand href="#home">
              <img
                src="./images/logo.png"
                alt="logo"
                height="50"
                className="mt-2"
              />
              </Navbar.Brand>
        </div>
          <div className="">
            <Nav className="d-flex justify-content-around">
              <small>
                <Form className="d-flex ocultar-busqueda">
                  <Form.Control
                    type="search"
                    placeholder="Buscar..."
                    aria-label="Search"
                  />
                  <button className="icono-busqueda">
                      <ion-icon className='' name="search-outline"></ion-icon>
                    
                  </button>
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
            </Nav>
          </div>
      </Container>
      </Navbar>
      <Container>
        <div className="container-fluid carousel-inner mt-3">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src="../images/covid.jpg" alt="" height={400} />
              <Carousel.Caption>
                <h3 className="title">Los casos de covid-19 aumentaron un 50% en Tucumán</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src="../images/enfermeria.jpg" alt="" height={400} />
              <Carousel.Caption>
                <h3 className="title">
                  Enfermería: exigen que se acelere el pase de escuela a
                  facultad y temen que se trunque el proyecto
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="../images/soja.jpg" alt="" height={400} />
              <Carousel.Caption>
                <h3 className="title">
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
