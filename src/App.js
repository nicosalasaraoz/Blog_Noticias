import "./css/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./Components/Error404";
//import Main from "./Components/Main";
import Layout from "./pages/Layout";
import PaginaContacto from "./Components/PaginaContacto";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Layout />} />
          <Route exact path="/paginacontacto" element={<PaginaContacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;