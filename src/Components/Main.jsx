import React from "react";
import ArticleList from "./ArticleList";
// import ArticleDetail from "./ArticleDetail";
import Header from "./Header";  
import Search from "./Search";


const Main = ({ search }) => {
  return (
    <>
      <Header />
      <ArticleList />
      <Search />
      {/* <ArticleDetail News={News} /> */}
      {/* <Articles /> */}
    </>
  );
};
export default Main;
