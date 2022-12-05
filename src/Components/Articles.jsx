import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';

const Articles = ({ art }) => {
              return (
                <Container>
                    <Card className="p-0 my-2">
                    <Card.Img variant="top" src={art.url} className="p-1" />
                    <Card.Body style={{ height: '10rem' }}>
                        <Card.Text>{art.title}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <Link to={`/Article/${art.id}`}>
                        <Button 
//                         onClick={() =>
// //                     add({
// //                       id: product._id,
// //                       title: product.title,
// //                       price: product.price,
// //                       q: counter,
// //                     })
                        >Ir al articulo</Button>
                        </Link>
                        <Button >
                            <Link to="/error404" className="text-center text-white m-0">
                                <BiLike />
                            </Link>
                        </Button>                        
                    </Card.Footer>
                    </Card>
                 </Container>
            );
        }
export default Articles;