import React from "react";
import { useState } from "react";
import ArticleList from "../views/news/ArticleList";
// import ArticleDetail from "./ArticleDetail";
import Header from "./Header";  
import Search from "./Search";


const Main = ({ News}) => {
  const [searchState, setSearchState] = useState('');
  console.log('searchState', searchState)
  return (
    <>
      <Header setSearchState={setSearchState}/>
      <ArticleList />
      <Search setSearchState={searchState}/>
      {/* <ArticleDetail News={News} /> */}
      {/* <Articles /> */}
    </>
  );
};
export default Main;
