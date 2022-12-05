import React from "react";
import ArticleList from "./ArticleList";
// import ArticleDetail from "./ArticleDetail";
import Header from "./Header";  

const Main = ({ News }) => {
  return (
    <>
      <Header />
      <ArticleList News={News} />
      {/* <ArticleDetail News={News} /> */}
      {/* <Articles /> */}
    </>
  );
};
export default Main;
