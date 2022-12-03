import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Articles = ({ art }) => {
              return (
                <Container>
                    <Card className="p-0 my-2">
                    <Card.Img variant="top" src={art.url} className="p-1" />
                    <Card.Body style={{ height: '10rem' }}>
                        <Card.Text>{art.title}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {/* <Link to={`./ArticleDetail.jsx/${art.id}`}> */}
                        <Button>Ir al articulo</Button>
                        {/* </Link> */}
                    </Card.Footer>
                    </Card>
                 </Container>
            );
        }
export default Articles;