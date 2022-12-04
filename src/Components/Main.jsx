import React from "react";
import { Container } from "react-bootstrap";
// import ArticleDetail from "./ArticleDetail";
import ArticleList from "./ArticleList";
// import Articles from "./Articles";
import Footer from "./Footer";
import Header from "./Header";
import NavbarMain from "./NavbarMain";

const Main = ({News}) => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100 px-0">
      <NavbarMain />
      <Header />
      <ArticleList News={News}/>
      {/* <ArticleDetail/> */}
      {/* <Articles /> */}
      <Footer />
    </Container>
  );
};
export default Main;