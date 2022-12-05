import {Card, Container, Row, Col} from 'react-bootstrap';

const ArticleDetail = ({News}) => {
  return (
    <Container className="pt-4">
        {News?.map((art, i) => (       
        <Card className="border-0">
          <Row>
            <Col>
              <Card.Img variant="top" src={art.url} />
            </Col>
            <Col>
              <Container>
                <Card.Text as="h1">
                  {art.title}
                </Card.Text>
                <Container className="d-flex justify-content-between">              
                </Container>
              </Container>
            </Col>
          </Row>
          <Card.Body>
            <Card.Text>
              {art.description}
            </Card.Text>
          </Card.Body>
        </Card>
       ))}
    </Container>
  );
};

export default ArticleDetail;


// import { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import { toast } from "react-toastify";

// import ProductCounter from "./ProductCounter";
// import ProductList from "./ProductList";

// const ProductDetail = ({ product, add, auth }) => {
//   const [counter, setCounter] = useState(1);
//   const [show, setShow] = useState(false);
//   const [submitOk, setSubmitOk] = useState(null);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitOk(null);
//     fetch("https://rcs-3i-api-node.vercel.app/products/update/" + product._id, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         category: product.category,
//         description: editDescription,
//         image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         price: editPrice,
//         title: editName,
//       }),
//     })
//       .then((res) => res.json())
//       .then((json) => setSubmitOk(true))
//       .catch((error) => setSubmitOk(false));
//   };

//   const [editName, setEditName] = useState(product.title);
//   const [editPrice, setEditPrice] = useState(product.price);
//   const [editDescription, setEditDescription] = useState(product.description);

//   useEffect(() => {
//     if (submitOk) {
//       toast("Modificado!");
//     } else if (submitOk === false) {
//       toast("Algo ha salido mal ...");
//     }
//   }, [submitOk]);

//   const comments = [
//     { user: "user1", comment: "Lorem ipsum ..." },
//     { user: "user2", comment: "Lorem ipsum ..." },
//     { user: "user3", comment: "Lorem ipsum ..." },
//   ];

//   const addComment = (e) => {
//     console.log("addComment");
//     // Postear hacia la API la info del comentario
//     // Pushear a lo que ya tengo ese mismo comentario
//   };

//   return (
//     <>
//       <Card className="m-1 h-100 border-0">
//         <Container className="d-flex justify-content-center align-items-center">
//           <Card.Img src={product.image} style={{ width: "100px" }} variant="top" />
//         </Container>
//         <Card.Body>
//           <Card.Title>{product.title}</Card.Title>
//           <Card.Text>${product.price}</Card.Text>
//           <Card.Text>{product.description}</Card.Text>
//         </Card.Body>
//         {auth.role !== "admin" && (
//           <>
//             <Card.Footer className="border-0">
//               <Container className="d-flex justify-content-center align-items-center">
//                 <ProductCounter counter={counter} setCounter={setCounter} />
//                 <Button
//                   size="sm"
//                   variant="success"
//                   onClick={() =>
//                     add({
//                       id: product._id,
//                       title: product.title,
//                       price: product.price,
//                       q: counter,
//                     })
//                   }
//                 >
//                   Agregar al carrito
//                 </Button>
//               </Container>
//             </Card.Footer>
//             <Card.Footer className="border-0">
//               <Container className="d-flex justify-content-center align-items-center g-2">
//                 <Link to="/checkout">
//                   <Button size="sm">Ir al Carrito</Button>
//                 </Link>
//                 <Button size="sm">Favorito</Button>
//               </Container>
//             </Card.Footer>
//           </>
//         )}
//         {auth.role === "admin" && (
//           <Card.Footer className="border-0">
//             <Container className="d-flex justify-content-center align-items-center">
//               <Button className="mx-2" size="sm" onClick={handleShow}>
//                 [ADMIN] Editar
//               </Button>

//               <Button className="mx-2" size="sm">
//                 [ADMIN] Borrar
//               </Button>
//             </Container>
//           </Card.Footer>
//         )}
//       </Card>
//       <Container>
//         <input className="w-100" placeholder="Ingrese su comentario" type="text" />
//         <Button onClick={() => addComment(estado)}>Enviar</Button>
//         {comments.map((comment, i) => (
//           <div key={i} className="border">
//             <span> {comment.comment}</span> <span> ({comment.user})</span>{" "}
//           </div>
//         ))}
//       </Container>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Editar producto</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="formName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 defaultValue={editName}
//                 placeholder="Product Name"
//                 type="text"
//                 value={editName}
//                 onChange={(e) => setEditName(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formPrice">
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 defaultValue={editPrice}
//                 placeholder="Product Price"
//                 type="number"
//                 value={editPrice}
//                 onChange={(e) => setEditPrice(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formDescription">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 defaultValue={editDescription}
//                 placeholder="Product Description"
//                 type="text"
//                 value={editDescription}
//                 onChange={(e) => setEditDescription(e.target.value)}
//               />
//             </Form.Group>

//             <Button type="submit" variant="primary" onClick={(e) => handleSubmit(e)}>
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default ProductDetail;