import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavbarMain from "./NavbarMain";
import Error404 from "./Error404";
import { Route, Routes } from "react-router-dom";
const Main = () => {
  return (
    <>
      <NavbarMain />
      <Header />
      <Footer />
      <Routes>
      <Route path="/error404" element={<Error404/>} />
      </Routes>
    </>
  );
};

export default Main;
