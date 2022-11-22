import React from "react";
import Table from "react-bootstrap/Table";

function FeaturedTable() {
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre Destacados</th>
            <th>Subtitulo</th>
            <th>Informacion</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default FeaturedTable;
