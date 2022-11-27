import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaAlignJustify } from 'react-icons/fa';

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
      <img
              src="./images/logo.png"
              alt="logo"
              height="60"
              className="pt-3 ms-2"
            />
      </Offcanvas.Title>
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