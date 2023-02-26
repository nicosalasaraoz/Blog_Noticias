import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearMenu from "../views/menu/CrearMenu";
import EditarMenu from "../views/menu/EditarMenu";

const RutasAdmin = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Administrador />} />
                <Route exact path="/crear" element={<CrearMenu />} />
                <Route exact path="/editar/:id" element={<EditarMenu />} />
            </Routes>
        </>
    );
};

export default RutasAdmin;
