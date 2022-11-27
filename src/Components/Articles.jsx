import { Container } from 'react-bootstrap';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Articles = ({ a }) => {
              return (
                <Container>
                    <Card className="p-0 m-2">
                    <Card.Img
                        variant="top"
                        src={a.url}
                        className="p-1"
                    />
                    <Card.Body>
                        <Card.Text>{a.title}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`${a.id}`}>
                        <Button>Ir al articulo</Button>
                        </Link>
                    </Card.Footer>
                    </Card>
                 </Container>
            );
        }
export default Articles;