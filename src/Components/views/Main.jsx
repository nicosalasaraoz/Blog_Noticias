import React from "react";
import { useState } from "react";
import { Container, Row} from 'react-bootstrap';
import Header from "./Header";  
import Articles from "./news/Articles";
import Search from "./Search";


const Main = ({ News}) => {
  const [searchState, setSearchState] = useState('');
  return (
    <>
      <Header setSearchState={setSearchState}/>
      <Container>
      <h1 className="display-3 py-3 text-center">Bienvenidos</h1>
      <hr />
      <div className="cards">
        {
            News.map((Art)=> <Articles key={Art.id} Art={Art}></Articles>)            
        }
      </div>
    </Container>
    {/* <Search setSearchState={searchState}/> */}
    </>
  );
};
export default Main;
