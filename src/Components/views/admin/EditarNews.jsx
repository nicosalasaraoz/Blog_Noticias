/* eslint-disable */

import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { editarProductoAPI, obtenerProductoAPI } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const EditarNews = () => {
  const { id } = useParams();
  const {register, handleSubmit, formState: { errors },setValue} = useForm();
  const navegacion = useNavigate();

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        // console.log(respuesta);
        //cargar los datos en el formulario
        setValue('nombreProducto',respuesta.dato.nombreProducto);
        setValue('precio',respuesta.dato.precio);
        setValue('imagen',respuesta.dato.imagen);
        setValue('categoria',respuesta.dato.categoria);
      }
    });
  }, []);

  const onSubmit = (datos) => {
    // console.log(datos);
    //pedir a la api actualizar el producto con los datos
    editarProductoAPI(id, datos).then((respuesta)=>{
      if(respuesta.status === 200){
        Swal.fire('Producto modificado', 'El producto fue modificado correctamente', 'success');
        navegacion('/administrar');
      }else{
        Swal.fire('Ocurrio un error', 'El producto no pudo ser modificado', 'error')
      }
    })
  };

  return (
    <>
      <section className="container my-3">
        <h3 className="display-4">Editar Producto</h3>
        <hr />
      </section>
      <section className="container my-3">
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre producto*</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ej:cafe"
              {...register("nombreProducto", {
                required: "El nombre del producto es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "La cantidad minima de caracteres debe ser 2",
                },
                maxLength: {
                  value: 20,
                  message: "La cantidad maxima de caracteres es de 20",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreProducto?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ej:50"
              {...register("precio", {
                required: "El precio es un valor obligatorio",
                min: {
                  value: 1,
                  message: "El precio minimo debe ser de $1",
                },
                max: {
                  value: 10000,
                  message: "El precio maximo debe ser de $10000",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ej:'https://....'"
              {...register("imagen", {
                required: "La URL de la imagen es obligatorio",
                pattern: {
                  value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                  message: "Debe ingresar una URL valida",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select
              aria-label="Default select example"
              {...register("categoria", {
                required: "Debe seleccionar una categoria",
              })}
            >
              <option value="">Seleccione una opción...</option>
              <option value="Bebida caliente">Bebida caliente</option>
              <option value="Bebida fria">Bebida Fria</option>
              <option value="Dulce">Dulce</option>
              <option value="Salado">Salado</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </section>
    </>
  );
};

export default EditarNews;
