import { Container } from "react-bootstrap";
import "./css/globals.css";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <Layout />
      </Container>
    </>
  );
}

export default App;
