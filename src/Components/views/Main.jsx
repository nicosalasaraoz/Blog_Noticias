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
      <Articles />
      <Search setSearchState={searchState}/>
      <Container className="mainSection">
      <h1 className="display-3 text-center">Bienvenidos</h1>
      <hr />
      <Row xs={1} md={4}>
        {/* aqui van las columnas */}
        {
            News.map((New)=> <Articles key={New.id} New={New}></Articles>)            
        }
      </Row>
    </Container>
    </>
  );
};
export default Main;
