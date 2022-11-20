import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
    <div className="mt-auto ">
      <footer className=" bg-footer py-4 text-white pb-0">
        <div className="container">
          <nav className="row">
            <Link to='/' className="col-12 col-md-4 col-lg-3 d-flex aling-items-center justify-content-center">
              <img src="../images/logo.png" className="mx-2 my-4 m-4" height="70" alt="logo"/>
            </Link> 
            <ul className="col-12 col-md-4 col-lg-3 list-unstyled text-center oculto">
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Últimas Noticias</Link></li>
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Opinión</Link></li>
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Edición Impresa</Link></li>
            </ul>
            <ul className="col-12 col-md-4 col-lg-3 list-unstyled text-center oculto">
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Clasificados</Link></li>
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Politicas de Privacidad</Link></li>
              <li className="mb-2"><Link to='/error' className="fw-bold text-white" style={{textDecoration:"none"}}>Términos & Condiciones</Link></li>
            </ul>
            <ul className="col-12 col-md-12 col-lg-3 list-unstyled">
              <li className="mb-2 fw-bold"></li>
              <li className="d-flex justify-content-evenly">
                <Link to='/error' className="icono-footer text-center">
                <FaFacebookF /></Link>
                <Link to='/error' className="icono-footer text-center">
                <FaTwitter /></Link>
                <Link to='/error' className="icono-footer text-center">
                <FaInstagram /></Link>
                </li>
                <li className="mt-3 fw-bold text-center">
                <Link to='/contacto'className="text-white" style={{textDecoration:"none"}}>Contáctenos</Link>
                </li>
            </ul>
          </nav>
        </div>
      </footer>
      <div className="text-center bg-footer">
          <p className="text-white mb-0 ">&copy; BlogNews. Comision 9i-Grupo3. 2022</p>
        </div>
    </div>
    </>
  );
};

export default Footer;
