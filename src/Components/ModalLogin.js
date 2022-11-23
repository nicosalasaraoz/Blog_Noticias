import { Field, Formik } from "formik";
import React from "react";
import { Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ModalLogin = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">
          <b>Bienvenido!</b>
        </Modal.Title>
      </Modal.Header>
      <Container>
        <Formik
          initialValues={{ email: "", pass: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Éste campo esta vacio";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Email incorrecto";
            }

            if (!values.email) {
              errors.pass = "Éste campo esta vacio";
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
            <Container className="d-flex">
              <Form className="w-100">
                <label className="my-2">
                  <b>Email</b>
                </label>
                <Field
                  name="email"
                  value={values.email}
                  className={`form-control ${
                    errors.email && touched.email && "is-invalid"
                  }`}
                />
                {errors.email && touched.email && errors.email}
                <br />
                <label className="my-2">
                  <b> Contraseña </b>
                </label>
                <Field
                  name="pass"
                  value={values.pass}
                  className={`form-control ${
                    errors.pass && touched.pass && "is-invalid"
                  }`}
                />
                {errors.pass && touched.pass && errors.pass}
                <br />
                <input
                  type={"submit"}
                  value="Ingresar"
                  className={"btn btn-success w-50 my-2"}
                />
              </Form>
            </Container>
          )}
        </Formik>
      </Container>
    </Modal>
  );
};

export default ModalLogin;
