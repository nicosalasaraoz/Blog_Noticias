import React from "react";
import { Formik, Form, Field } from "Formik";
import { useState } from "react";
import { Container } from "react-bootstrap";

const FormFormik = () => {
  const [email, setEmail] = useState("");
  return (
    <Container>
      <Formik initialValues={{ email: "" }}>
        validate=
        {(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Este campo esta vacío!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Mail Inválido! Ingresalo de nuevo.";
          }
          return errors;
        }}
        onSubmit=
        {(values) => {
          console.log("values", values);
        }}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          <Container className="d-flex">
            <h2 className="text-center my-3">Recuperar Contraseña</h2>
            <Form>
              <label>Email</label>
              <Field
                onInput={(e) => setEmail(e.target.value)}
                type="mail"
                name="email"
                value={values.email}
                className={`form-control ${
                  errors.email && touched.email && "is-invalid"
                }`}
              />
              <div style={{ color: "red" }} className="mt-1">
                {errors.email && touched.email && errors.email}
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <input
                  type={"submit"}
                  value="Enviar"
                  className={"btn btn-success w-50 my-2"}
                />
              </div>
            </Form>
          </Container>;
        }}
      </Formik>
    </Container>
  );
};

export default FormFormik;
