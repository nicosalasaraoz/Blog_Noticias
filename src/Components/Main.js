import React from "react";
import { Container } from "react-bootstrap";
// import Articles from "./Articles";
import Footer from "./Footer";
import Header from "./Header";
import NavbarMain from "./NavbarMain";
import Error404 from "./Error404";

import { Route, Routes } from "react-router-dom";
import PaginaAdminFeatured from "./PaginaAdminFeatured";
import PaginaAdminUser from "./PaginaAdminUser";
const Main = () => {
  return (
    <>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <NavbarMain />
        <Header />
        {/* <Articles/> */}
        <Footer />
      </Container>
      <NavbarMain />
      <Header />
      <Footer />

      <Routes>
        <Route path="/error404" element={<Error404 />} />
      </Routes>

      <Error404 />
      <PaginaAdminFeatured />
      <PaginaAdminUser />
    </>
  );
};

export default Main;
