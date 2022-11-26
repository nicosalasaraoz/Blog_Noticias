import React from "react";
import { Container, Form } from "react-bootstrap";
import NavbarMain from "./NavbarMain";
import { Field, Formik } from "formik";
import Footer from "./Footer";

const PaginaContacto = () => {
  return (
    <>
      <NavbarMain />
      <Container className="d-flex fluid justify-content-center">
        <img
          src="./images/logo.png"
          alt="logo"
          className="tamaño-mobile w-50 h-50 mt-5"
        />
      </Container>
      <h2 className="d-flex justify-content-center">¿Quieres contactarnos?</h2>
      <Container>
        <p>
          Si tienes alguna duda, consulta o sugerencia rellena este formulario y
          nos pondremos en contacto contigo lo antes posible. Tambien puedes
          ponerte en contacto con nosotros llamando a nuestro numero de ATENCION
          AL CLIENTE de RollingNews 381 5685235.
        </p>
      </Container>
      <Container>
        <Formik
          initialValues={{ user: "", email: "", phone: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.user) {
              errors.user = "El campo esta vacio, completalo!";
            } else if (
              !/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/i.test(
                values.user
              )
            ) {
              errors.user =
                "Nombre incorrecto, solo puede contener letras y sin espacio al final";
            }

            if (!values.email) {
              errors.email = "El campo esta vacio, completalo!";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Email incorrecto!";
            }

            if (!values.phone) {
              errors.phone = "El campo esta vacio, completalo!";
            } else if (/^(\d{10})((\d{3}){0,1})$/i.test(values.phone)) {
              errors.phone =
                "Este campo solo puede ser completado con numeros!";
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log("values", values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Container className="d-flex fluid justify-content-center mb-2 color-formc bordes-contenedor">
              <Form className="w-50 py-3 color-form">
                <label className="my-2">
                  <b className="text-white">Nombre Completo</b>
                </label>
                <Field
                  name="user"
                  values={values.user}
                  className={`form-control ${
                    errors.user && touched.user && "is-invalid"
                  }`}
                />
                <div style={{ color: "red" }} className="mt-1">
                  {errors.user && touched.user && errors.user}
                </div>
                <br />
                <label className="my-2">
                  <b className="text-white">Tu Correo electronico</b>
                </label>
                <Field
                  name="email"
                  values={values.email}
                  className={`form-control ${
                    errors.email && touched.email && "is-invalid"
                  }`}
                />
                <div style={{ color: "red" }} className="mt-1">
                  {errors.email && touched.email && errors.email}
                </div>
                <br />
                <label>
                  <b className="text-white">Numero telefonico</b>
                  <p className="mt-1">
                    <small className="text-white">
                      No olvides poner tu codigo de area.
                    </small>
                  </p>
                </label>
                <Field
                  type="number"
                  name="phone"
                  values={values.pass}
                  className={`form-control ${
                    errors.phone && touched.phone && "is-invalid"
                  }`}
                />
                <div style={{ color: "red" }} className="mt-1">
                  {errors.phone && touched.phone && errors.phone}
                </div>
                <br />
                <div className="d-flex justify-content-center">
                  <input
                    type={"submit"}
                    value="Registrarme"
                    className={"btn btn-secondary w-50 my-2"}
                  />
                </div>
              </Form>
            </Container>
          )}
        </Formik>
      </Container>
      <Footer />
    </>
  );
};

export default PaginaContacto;
