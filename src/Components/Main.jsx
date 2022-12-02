import React from "react";
import { Container } from "react-bootstrap";
import ArticleList from "./ArticleList";
import Footer from "./Footer";
import Header from "./Header";
import NavbarMain from "./NavbarMain";
const Main = () => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100 px-0">
      <NavbarMain />
      <Header />
      <ArticleList />
      <Footer />
    </Container>
  );
};
export default Main;