import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

const Search = ({News, searchState, setSearchState}) => {

  const [articles, setArticles] = useState([]);

  // Cambiar URL por na de Noticias desde base de datos
  const URL = "https://fakestoreapi.com/products";


  const prueba = () =>{
    let res = News.filter((dato) => dato.title.toLowerCase().includes(searchState.toLowerCase()));
    setArticles(res);
  } 
 



  useEffect(() => {
    prueba();
   }, [searchState]);

  return (
    <>
      <Container>
        <div className="Buscador">
          {articles[0]?(articles.map((article) => (
            <div key={article.id} className="Card">
              <Card.Img variant="top" src={article.url} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Button >leer más..</Button>
              </Card.Body>
            </div>))):(<h1 className="buscadorMessage">No se encontraron resultados para : "{searchState}"</h1>)}
        </div>
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
