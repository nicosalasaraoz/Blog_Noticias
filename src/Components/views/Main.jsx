import React from "react";
import { Container, Row} from 'react-bootstrap';
import Header from "./Header";  
import Articles from "./news/Articles";



const Main = ({ News, setSearchState, searchState}) => {
  
  return (
    <>
      <Header setSearchState={setSearchState} searchState={searchState}/>
      <Container>
      <h1 className="display-3 py-3 text-center">Artículos destacados</h1>
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
