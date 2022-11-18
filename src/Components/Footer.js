import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div>
      <footer className="mt-auto bg-dark py-4 text-white">
        <div classname="container">
          <nav className="row">
            <Link to='/' classname="col-12 col-md-3 d-flex aling-items-center justify-content-center">
              <img src="../images/logo.png" className="mx-2" height="60" alt="logo"/>
            </Link> 
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="mb-2"></li>
            </ul>
          </nav>
        </div>
      </footer>
      </div>
      
    </>
  );
};

export default Footer;
