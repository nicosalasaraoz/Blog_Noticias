import React from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function TablaDestacados() {
  const usuarios = [
    {
      id: 1,
      titulo: "Juan Ramirez",
      imagen: "jramirez",
    },
    {
      id: 2,
      titulo: "Paola Ortiz",
      imagen: "admin",
    },
  ];
  return (
    <Container>
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
              <td>{usuario.titulo}</td>
              <td>{usuario.imagen}</td>
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

export default TablaDestacados;
