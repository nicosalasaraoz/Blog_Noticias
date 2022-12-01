import React from "react";
import { Formik, Form, Field } from "Formik";
import { Container } from "react-bootstrap";

const FormFormik = () => {
  const { state, seState } = useState("");
  return (
    <Formik initialValues={{ email }}>
      validate=
      {(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit=
      {(values) => {
        console.log("values".values);
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
        return (
          <Container style={{ width: "30%" }}>
            <h2 className="text-center my-3">Recuperar Contraseña</h2>
            <Form>
              <label>Email</label>
              <Field
                name="email"
                value={values.email}
                className={"form-control"}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="submit"
                value="Enviar"
                className="btn btn-primary w-100 mt-3"
              />
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
};
