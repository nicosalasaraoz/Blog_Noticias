import React from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function TablaUsuario() {
  const Usuarios = [
    {
      id: 1,
      nombreYapellido: "Juan Ramirez",
      nombreDeUsuario: "jramirez",
      role: "usuario",
    },
    {
      id: 2,
      nombreYapellido: "Paola Ortiz",
      nombreDeUsuario: "admin",
      role: "administrador",
    },
  ];
  return (
    <Container className="container-fluid">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre y Apellido</th>
            <th>Nombre de Usuario</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Usuarios.map((usuario) => (
            <tr>
              <td>{usuario.nombreYapellido}</td>
              <td>{usuario.nombreDeUsuario}</td>
              <td>{usuario.role}</td>
              <td>
                <Button variant="danger">Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default TablaUsuario;
