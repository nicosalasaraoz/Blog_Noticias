import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa';

const Desplegable = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
    <FaBars/>
  </Button>

  <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      Some text as placeholder. In real life you can have the elements you
      have chosen. Like, text, images, lists, etc.
    </Offcanvas.Body>
  </Offcanvas>
  </>
  )
}

export default Desplegable;