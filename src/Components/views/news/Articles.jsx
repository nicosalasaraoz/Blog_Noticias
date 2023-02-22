import { Container, CardGroup, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';

const Articles = ({ Art }) => {
    const {id, title, url} = {...Art}
    // const [productos, setProductos] = useState([]);

    // useEffect(()=>{
    //    consultarAPI().then((respuesta)=>{
    //     // console.log(respuesta)
    //     setProductos(respuesta);
    //    })
       
    // },[])
              return (
                  <Container >
                    <CardGroup>
                    <Card.Img variant="top" src={url} className="p-1" />
                    <Card.Body>
                        <Card.Text>{title}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="mt-auto d-flex justify-content-between">
                        <Link className="btn btn-primary" to={`/ArticleDetail/${id}`}>
                        Ir al articulo
                        </Link>
                        <Link to="/error404" className=" btn btn-primary text-center text-white m-0">
                            <BiLike />
                        </Link>                     
                    </Card.Footer>
                    </CardGroup>
                 </Container>
            );
        }
export default Articles;