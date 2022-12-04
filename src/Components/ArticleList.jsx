import React from 'react';
import { Row, Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import Articles from "./Articles";

const ArticleList = ({News}) => {
  return (
    <Container>
      <CardGroup>
      <Row xs={2} md={4} lg={5} className="my-2">
        {News?.map((art, i) => (
          <Articles art={art} key={'Articles' + i} />
        ))}
      </Row>
    </CardGroup>
    </Container>
  );
};
export default ArticleList;