import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

const Search = (props) => {
  console.log("props", props)
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  console.log('searchProps', search)

  // Cambiar URL por na de Noticias desde base de datos
  const URL = "https://fakestoreapi.com/products";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setArticles(data);
  };

  const prueba = () =>{
    let res = articles.filter((dato) => dato.title.toLowerCase().includes(props.searchState.toLowerCase()));
    setArticles(res)
  } 
  console.log('articles', articles)


  useEffect(() => {
    showData();
  }, []);

  useEffect(() => {
    prueba()
  }, [props.searchState]);

  return (
    <>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {articles.map((article) => (
            <Card key={article.id} style={{ width: "10rem" }}>
              <Card.Img variant="top" src={article.image} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Button variant="primary">leer más..</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Search;


// import React from "react";
// import { useParams } from "react-router";
// import FeatureElement from "./FeatureElement";

// const Search = ({ placesDb }) => {
//   let resultSearch = useParams().resultado;
//   return (
//     <>
//       <div className="d-flex m-2 mx-3">
//         <p>Buscaste: "{resultSearch}"</p>
//       </div>
//       <div className="d-flex flex-column">
//         <div className="row m-0">
//           {placesDb.length !== 0 ? (
//             placesDb.map(
//               (p, i) =>
//                 p.namePlace
//                   .toLowerCase()
//                   .includes(resultSearch.toLowerCase().trim()) && (
//                   <FeatureElement key={p._id} object={p} />
//                 )
//             )
//           ) : (
//             <h1 className="text-center">No se encontraron resultados</h1>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Search;
