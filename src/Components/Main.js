import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <Navbar />
        <Header />
        <div>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="../images/Montaña.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
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
                className="d-block w-100"
                src="../images/Montaña.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
