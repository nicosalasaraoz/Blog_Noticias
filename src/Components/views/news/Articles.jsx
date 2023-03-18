import { Container, CardGroup, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';

const Articles = ({ Art }) => {
    const {id, title, url} = {...Art}
    // const [Art, setArt] = useState([]);

    // useEffect(()=>{
    //    consultarAPI().then((respuesta)=>{
    //     // console.log(respuesta)
    //     setArt(respuesta);
    //    })
       
    // },[])
              return (
                  <Container className="d-flex">
                    <CardGroup>
                    <Card.Img variant="top" src={url} className="p-1" />
                    <Card.Body>
                        <Card.Text>{title}</Card.Text>
                    </Card.Body>
                    <Container className="mt-auto d-flex justify-content-between p-0 my-1">
                        <Link className="btn btn-primary" to={`/ArticleDetail/${id}`}>
                        Ir al articulo
                        </Link>
                        <Link to="/error404" className=" btn btn-primary text-center text-white">
                            <BiLike />
                        </Link>
                    </Container>
                    </CardGroup>
                 </Container>
            );
        }
export default Articles;