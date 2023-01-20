import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';

const Articles = ({ art }) => {
              return (
                <Container>
                    <Card className="p-0 my-2">
                    <Card.Img variant="top" src={art.url} className="p-1" />
                    <Card.Body style={{ height: '9rem' }}>
                        <Card.Text>{art.title}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <Link className="btn btn-primary" to={`/Article/${art.id}`}>
                        {/* <Button 
//                         onClick={() => ({id: Article._id, title: Article.title})
                        >Ir al articulo</Button> */}
                        Ir al articulo
                        </Link>
                        <Link to="/error404" className=" btn btn-primary text-center text-white m-0">
                            <BiLike />
                        </Link>                     
                    </Card.Footer>
                    </Card>
                 </Container>
            );
        }
export default Articles;