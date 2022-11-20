import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavbarMain from "./NavbarMain";
import Error404 from "./Error404";

const Main = () => {
  return (
    <>
      <NavbarMain />
      <Header />
      <Footer />
      <Error404 />
    </>
  );
};

export default Main;
