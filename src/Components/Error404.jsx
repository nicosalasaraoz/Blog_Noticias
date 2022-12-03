import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    
      <Container  className="image-e">
          <Button variant="danger" className="bt-volver">
          <Link to="/" className="text-white" style={{ textDecoration: "none" }}>Back to Home</Link>
          </Button>
      </Container>
    
  );
};

export default Error404;
