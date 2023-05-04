import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container className="image-e">
      <Link to="/" className="text-white" style={{ textDecoration: "none" }}><Button className="bt-volver">
          Back to Home
      </Button></Link>
    </Container>
  );
};

export default Error404;
