import React from "react";
import ArticleList from "./ArticleList";
// import ArticleDetail from "./ArticleDetail";
import Header from "./Header";  
import Search from "./Search";


const Main = ({ News }) => {
  return (
    <>
      <Header />
      <ArticleList News={News} />
      <Search />
      {/* <ArticleDetail News={News} /> */}
      {/* <Articles /> */}
    </>
  );
};
export default Main;
