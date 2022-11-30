import React from "react";
import { Container } from "react-bootstrap";
import ArticleList from "./ArticleList";
import Footer from "./Footer";
import Header from "./Header";
import NavbarMain from "./NavbarMain";
import Error404 from "./Error404";
import { Route, Routes } from "react-router-dom";
import PaginaContacto from "./PaginaContacto";

const Main = () => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100 px-0">
      <NavbarMain />
      <Header />

      <Footer />

      <Routes>
        <Route path="/error404" element={<Error404 />} />
      </Routes>

      <ArticleList />
      <PaginaContacto />
    </Container>
  );
};

export default Main;
