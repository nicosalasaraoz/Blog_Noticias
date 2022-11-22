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


// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// // import Col from 'react-bootstrap/Col';
// // import Row from 'react-bootstrap/Row';

// function GroupExample() {
//   return (
//      <Container Row xs={2} md={4} lg={3} className="g-4" mt={3}>        
//     <CardGroup>
//       <Card>
//         <Card.Img variant="top" src="https://d3us6z9haan6vf.cloudfront.net/11-19-2022/t_37e47f27155743fba1e2502375a7f545_name_file_1280x720_2000_v3_1_.jpg" />
//         <Card.Body>
//           <Card.Title>La ceremonia inaugural del Mundial Qatar 2022, en vivo</Card.Title>
//           {/* <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </Card.Text> */}
//         </Card.Body>
//         {/* <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer> */}
//       </Card>
//       <Card>
//         <Card.Img variant="top" src="https://resizer.glanacion.com/resizer/hhCCQ5jo51MwBjnflQo-v9Q5U_w=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/GAFSTS6GRFGVLKU7P7C3XP7WAI" />
//         <Card.Body>
//           <Card.Title>Mundial Qatar 2022: las diez razones por las que en este país se jugará la Copa más atípica de la historia</Card.Title>
//           {/* <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </Card.Text> */}
//         </Card.Body>
//         {/* <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer> */}
//       </Card>
//       <Card>
//         <Card.Img variant="top" src="https://www.lanacion.com.ar/resizer/3Lq7mumSuBZN84_TY1m2p9QG_LU=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/DN244MAFKBE7ZJEVUAZQ37NJ4U.jpg" />
//         <Card.Body>
//           <Card.Title>Las metas de los inversores argentinos</Card.Title>
//           {/* <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </Card.Text> */}
//         </Card.Body>
//         {/* <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer> */}
//       </Card>
//       <Card>
//         <Card.Img variant="top" src="https://www.lanacion.com.ar/resizer/jMc64ujRWuT7OzvjNobal9p3Kuo=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TEHDQDMRKJEXLNPR3ORIEQXEVA.jpg" />
//         <Card.Body>
//           <Card.Title>Sergio Massa proyecta bajar un punto de inflación cada 60 días y llegar al 3% en abril</Card.Title>
//           {/* <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </Card.Text> */}
//         </Card.Body>
//         {/* <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer> */}
//       </Card>
//       <Card>
//         <Card.Img variant="top" src="https://www.lanacion.com.ar/resizer/h4ZU-_8Atp6QXL1JvbgWQVsBIH4=/1200x800/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/RPVUDKMONBFRPN3C46R54KYSYI" />
//         <Card.Body>
//           <Card.Title>Egipto, sospechado de favorecer a los Estados petroleros y gasíferos desde la presidencia de la COP27</Card.Title>
//           {/* <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </Card.Text> */}
//         </Card.Body>
//         {/* <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer> */}
//       </Card>
//     </CardGroup>
//     </Container>
    
//   );
// }

// export default GroupExample;