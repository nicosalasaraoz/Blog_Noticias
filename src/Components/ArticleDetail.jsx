// import { useState } from "react";
// import { Card, Container, Row, Col } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";

// const ArticleDetail = ({ News }) => {

//   const [show, setShow] = useState(false);
//   const [submitOk, setSubmitOk] = useState(null);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const handleSubmit = (e) => {e.preventDefault(); setSubmitOk(null);
//       fetch(" " + Article._id, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//         body: JSON.stringify({
//         category: Article.category,
//         description: editDescription,
//         image: "",
//         title: editName,
//       }),
//     })
//       .then((res) => res.json())
//       .then((json) => setSubmitOk(true))
//       .catch((error) => setSubmitOk(false));
//   };

//   return (
//     <Container className="pt-4">
//       {News?.map((art, i) => (
//         <Card className="border-0">
//           <Row>
//             <Col>
//               <Card.Img variant="top" src={art.url} />
//             </Col>
//             <Col>
//               <Container>
//                 <Card.Text as="h1">{art.title}</Card.Text>
//                 <Container className="d-flex justify-content-between"></Container>
//               </Container>
//             </Col>
//           </Row>
//           <Card.Body>
//             <Card.Text>{art.description}</Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </Container>
//   );
// };

// export default ArticleDetail;
