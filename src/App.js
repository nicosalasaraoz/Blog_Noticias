import { Container } from "react-bootstrap";
import "./css/globals.css";
import Layout from "./pages/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container className="d-flex flex-column min-vh-100 min-vw-100 px-0">
          <Layout />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
