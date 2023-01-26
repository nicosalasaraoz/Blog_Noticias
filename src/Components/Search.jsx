import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

const Search = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  // Cambiar URL por na de Noticias desde base de datos
  const URL = "https://fakestoreapi.com/products";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    setArticles(data);
  };

  const results = !search
    ? articles
    : articles.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase)
      );

  const searcher = (e) => setSearch(e.target.value);

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {results.map((article) => (
            <Card key={article.id} style={{ width: "10rem" }}>
              <Card.Img variant="top" src={article.image} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Button variant="primary">leer más..</Button>
                <Card.Body />
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Search;
