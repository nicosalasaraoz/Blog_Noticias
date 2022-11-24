import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <Container fluid className="image-e">
        <Link to="/">
          <Button size="lg" variant="danger" className="bt-volver">
            Volver al Home
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Error404;
