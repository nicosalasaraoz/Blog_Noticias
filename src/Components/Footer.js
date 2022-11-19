import React from "react";
import {Link} from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div>
      <footer className="mt-auto bg-dark py-4 text-white">
        <div className="container">
          <nav className="row">
            <Link to='/' className="col-12 col-md-3 d-flex aling-items-center justify-content-center">
              <img src="../images/logo.png" className="mx-2 my-4" height="60" alt="logo"/>
            </Link> 
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Últimas noticias</Link></li>
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Opinión</Link></li>
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Edición impresa</Link></li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Clasificados</Link></li>
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Politicas de Privacidad</Link></li>
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Términos & Condiciones</Link></li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="mb-2 fw-bold"></li>
              <li className="d-flex justify-content-evenly">
                <Link to='/error' className="icono text-center">
                <FaFacebookF /></Link>
                <Link to='/error' className="icono text-center">
                <FaTwitter /></Link>
                <Link to='/error' className="icono text-center">
                <FaInstagram /></Link>
                </li>
            </ul>
          </nav>
        </div>
      </footer>
      </div>
      
    </>
  );
};

export default Footer;
