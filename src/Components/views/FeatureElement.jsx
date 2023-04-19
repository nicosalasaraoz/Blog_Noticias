import React from "react";
import { Container, Row , Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";


const FeatureElement = (props) => {

return (  
    <>{
        <div className="col-12 mt-2 mt-sm-0 col-sm-6 col-md-4 col-lg-3 col-xxl-2 div-card p-0">
        <Container>
        <Row xs={1} md={2} className="g-4">
            <Card key={props.object.id} style={{ width: "10rem" }}>
            <Card.Img variant="top" src={props.object.image} />
                <Card.Body>
                <Card.Title>{props.object.title}</Card.Title>
                <Card.Text>{props.object.description}</Card.Text>
                <Button variant="primary">leer más..</Button>
                <Card.Body />
                </Card.Body>
            </Card>
        ))
        </Row>
        </Container>
    </div>
    }
    </>
);
};

export default FeatureElement;