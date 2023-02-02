// import {React, useState, useEffect,} from 'react';
// import ProductDetail from './ProductDetail';
// import { useParams } from 'react-router-dom';

// const ProductDetailContainer = ({ add }) => {
//   const params = useParams();

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(
//       `https://fakestoreapi.com/products/${params.id}`
//     )
//       .then(res => res.json())
//       .then(json => setData(json));
//   }, []);
//   return <ProductDetail data={data} add={add} />;
// };

// export default ProductDetailContainer;

// import React, {useEffect, useState} from 'react';

// const ArticleListContainer = () => {
    
// //   const [data, setData] = useState([]);
// //   useEffect(() => {
// //     fetch('https://fakestoreapi.com/products')
// //       .then(res => res.json())
// //       .then(json => setData(json));
// //     console.log(data);
// //   }, []);
//   return (
//     // <>
//     //   {/* <Landing /> */}
//     //   {/* <ArticleDetail News = {News}  /> */}
//     //   {/* <ArticleList News={News} /> */}
//     // </>
//   );
// };

// export default ArticleListContainer;