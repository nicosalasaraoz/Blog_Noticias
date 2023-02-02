import "./css/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/views/Main";
import PaginaContacto from "./Components/views/PaginaContacto";
import NavbarMain from "./Components/common/NavbarMain";
import Error404 from "./Components/common/Error404";
import Footer from "./Components/common/Footer"
import Search from "./Components/views/Search";
//import Main from "./Components/Main";
// import ArticleDetail from "./Components/ArticleDetail";


function App() {
  
  return (
<BrowserRouter>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <NavbarMain />
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/paginacontacto" element={<PaginaContacto />} />
            <Route exact path="/search" element={<Search />} />
            <Route path="*" element={<Error404 />} />
            {/* <Route path="/ArticleDetail/:id"  element={<ArticleDetail News={News} />} /> */}
          </Routes >
          <Footer />
      </Container>
</BrowserRouter>
  );
}
export default App;