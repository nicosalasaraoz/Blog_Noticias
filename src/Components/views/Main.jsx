import React from "react";
import { useState } from "react";
import { Container, Row} from 'react-bootstrap';
import Header from "./Header";  
import Articles from "./news/Articles";
import Search from "./Search";


const Main = ({ News}) => {
  const [searchState, setSearchState] = useState('');
  console.log('searchState', searchState)
  return (
    <>
      <Header setSearchState={setSearchState}/>
      <Container>
      <h1 className="display-3 text-center">Bienvenidos</h1>
      <hr />
      <Row xs={2} md={4} lg={5} className="my-2 ">
        {
            News.map((Art)=> <Articles key={Art.id} Art={Art}></Articles>)            
        }
      </Row>
    </Container>
    <Search setSearchState={searchState}/>
    </>
  );
};
export default Main;
