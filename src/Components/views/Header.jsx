import React from "react";
import { Carousel, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Desplegable from "./Desplegable";

import { FaSistrix } from "react-icons/fa";


const Header = (props) => {
  console.log('props', props)
  return (
    <>
      <Navbar bg="dark" className="" sticky="top">
        <Container fluid>
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
        
        <div className="SearchBar"> 
              <div className="ocultar-busqueda input-wrapper">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Buscar articulo..."
                  value={props.search}
                  onChange={(e)=> props.setSearchState(e.target.value)}
                />
                </div>
                <Link className="SearchIcon ocultar-busqueda">
                <FaSistrix className="d-flex" />
                </Link>
        
                </div>

              <div className="d-flex ">
                <ul className="SocialHeader">
                  <li>
                    <Link
                      to="/error404"
                      className=""
                    >
                      <FaFacebookF/>
                    </Link>
                    <Link
                      to="/error404"
                      className=""
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      to="/error404"
                      className=""
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
          
        </Container>
      </Navbar>
      <Container>
        <div className="container-fluid carousel-inner mt-3">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="../images/covid.jpg"
                alt=""
                height={400}
              />
              <Carousel.Caption>
                <h3 className="title">
                  Los casos de covid-19 aumentaron un 50% en Tucumán
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="../images/enfermeria.jpg"
                alt=""
                height={400}
              />
              <Carousel.Caption>
                <h3 className="title">
                  Enfermería: exigen que se acelere el pase de escuela a
                  facultad y temen que se trunque el proyecto
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/soja.jpg"
                alt=""
                height={400}
              />
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
