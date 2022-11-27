import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaAlignJustify } from 'react-icons/fa';
import { Link } from "react-router-dom";
import  Nav  from "react-bootstrap/Nav";

const Desplegable = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button  variant="outline-secondary"  className="desp"  onClick={handleShow}>
    <FaAlignJustify/>
  </Button>

  <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>
      <Link to="/">
      <img
              src="./images/logo.png"
              alt="logo"
              height="60"
              className="pt-3 ms-2"
            />
      </Link>
      </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className="">
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link eventKey="link-1">Economía</Nav.Link>
      <Nav.Link eventKey="link-2">Sociedad</Nav.Link>
      <Nav.Link eventKey="link-3">Deportes</Nav.Link>
      <Nav.Link eventKey="link-4">Mundo</Nav.Link>
      <Nav.Link eventKey="link-5">Espectáculos</Nav.Link>
      <Nav.Link eventKey="link-6">Política</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
    </Offcanvas.Body>
  </Offcanvas>
  </>
  )
}

export default Desplegable;