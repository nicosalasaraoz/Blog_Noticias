import {Card, Container, Row, Col} from 'react-bootstrap';

const ArticleDetail = ({a}) => {
  return (
    <Container className="pt-4">
      <Card className="border-0">
        <Row>
          <Col>
            <Card.Img variant="top" src={a.url} />
          </Col>
          <Col>
            <Container>
              <Card.Text as="h2">
                ${a.title}
              </Card.Text>
              <Container className="d-flex justify-content-between">              
              </Container>
            </Container>
          </Col>
        </Row>
        <Card.Body>
          <Card.Text>
            {a.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ArticleDetail;