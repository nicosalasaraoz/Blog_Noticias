import { Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';

const Articles = ({ New }) => {
    const {id, title, url} = {...New}
    // const [productos, setProductos] = useState([]);

    // useEffect(()=>{
    //    consultarAPI().then((respuesta)=>{
    //     // console.log(respuesta)
    //     setProductos(respuesta);
    //    })
       
    // },[])
              return (
                <Container>
                    <Card className="p-0 my-2">
                    <Card.Img variant="top" src={url} className="p-1" />
                    <Card.Body style={{ height: '9rem' }}>
                        <Card.Text>{title}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <Link className="btn btn-primary" to={`/ArticleDetail/${id}`}>
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