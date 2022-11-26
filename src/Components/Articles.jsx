import { Container } from 'react-bootstrap';
import { Card} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Articles = ({ a }) => {
              return (
                <Container>
            <Card className="p-0">
            <Card.Img
                variant="top"
                src={a.url}
                className="p-3"
            />
            <Card.Body>
                <Card.Title>{a.title}</Card.Title>
            </Card.Body>
            {/* <Card.Footer>${a.price}</Card.Footer>
            <Card.Footer>
                <Link to={`/product/${a.id}`}>
                <Button>Ir al producto</Button>
                </Link>
            </Card.Footer> */}
            </Card>
                 </Container>
            );
        }
export default Articles;