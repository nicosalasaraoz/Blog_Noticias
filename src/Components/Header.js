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
            <ul className="d-fluid justify-content-around">
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
              className="d-block w-100 h-50"
              src="../images/Montaña.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 h-50"
              src="../images/Montaña.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="../images/Montaña.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Header;
