import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import NavbarMain from "./NavbarMain";
import Error404 from "./Error404";
import { Route, Router, Routes } from "react-router-dom";
import PaginaAdminFeatured from "./PaginaAdminFeatured";
import PaginaAdminUser from "./PaginaAdminUser";

const Main = () => {
  return (
    <>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        
        <NavbarMain />
        <Header />
        
      <PaginaAdminFeatured />
      <PaginaAdminUser />
      <Footer />
      <Routes>
          <Route path="/error404" element={<Error404/>} />
        </Routes>
      </Container>
    </>
  );
};

export default Main;
