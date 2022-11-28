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
    <FaAlignJustify className='icon-desp'/> Secciones
  </Button>

  <Offcanvas className="canv" show={show} onHide={handleClose} >
    <Offcanvas.Header closeButton className="canva-t" >
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
    <Offcanvas.Body className="canv-b">
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link eventKey="link-1">Último Momento</Nav.Link>
      <hr></hr>
      <Nav.Link eventKey="link-2">Economía</Nav.Link>
      <Nav.Link eventKey="link-3">Deportes</Nav.Link>
      <Nav.Link eventKey="link-4">Mundo</Nav.Link>
      <Nav.Link eventKey="link-5">Espectáculos</Nav.Link>
      <Nav.Link eventKey="link-6">Política</Nav.Link>
      <Nav.Link eventKey="link-7">Opinión</Nav.Link>
      <Nav.Link eventKey="link-9" className='fw-bold fs-6'>Contenido Exclusivo</Nav.Link>
    </Nav>
    </Offcanvas.Body>
  </Offcanvas>
  </>
  )
}

export default Desplegable;