import React from "react";
import { Container } from "react-bootstrap";
import ArticleList from "./ArticleList";
import Footer from "./Footer";
import Header from "./Header";
import NavbarMain from "./NavbarMain";
import { Route, Routes } from "react-router-dom";
import PaginaContacto from "./PaginaContacto";

const Main = () => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100 px-0">
      <NavbarMain />
      <Header />

      <Footer />

      <Routes>
        
        <Route path="/paginacontacto" element={<PaginaContacto />} />
      </Routes>

      <ArticleList />
      
    </Container>
  );
};

export default Main;
