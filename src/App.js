import { Container } from "react-bootstrap";
import "./css/globals.css";
import Layout from "./pages/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./Components/Error404";



function App() {
  return (
    <>
      <BrowserRouter>
        <Container className="d-flex flex-column min-vh-100 min-vw-100 px-0">
          <Layout />
          
        </Container>
        <Routes>
        <Route path="/error404" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
