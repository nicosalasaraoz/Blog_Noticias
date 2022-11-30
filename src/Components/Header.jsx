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
    <Navbar bg="light"  expand="lg" className=" d-flex justify-content-evenly">
    <Container  className="">
      <div className="">
    <Desplegable />
          <Navbar.Brand href="#home">
            <img
              src="./images/logo.png"
              alt="logo"
              height="60"
              className="m-3"
            />
          </Navbar.Brand>
          </div>
          <Nav>
          <ul className="">
              <li className="m-2">
                <Link to="/error404" className="icono-header text-center m-3">
                  <FaFacebookF />
                </Link>
                <Link to="/error404" className="icono-header text-center m-3">
                  <FaTwitter />
                </Link>
                <Link to="/error404" className="icono-header text-center m-3">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          <div className="ocultar-busqueda" >
            <small>
              <Form className="d-flex ">
                <Form.Control
                  type="search"
                  placeholder="Buscar..."
                  className="me-2"
                  aria-label="Search"
                />
              <Button>
                  <div className="icono-busqueda ">
                    <ion-icon
                      className="icono-busqueda"
                      name="search-outline"
                    ></ion-icon>
                  </div>
                </Button>
                </Form></small>

        </div>
      </Nav>
          
      
      </Container>
      </Navbar>
<Container>
      <div className="fluid h-50">
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
      </div>
      </Container>
    </>
  );
};

export default Header;
