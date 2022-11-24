import { Field, Formik } from "formik";
import React from "react";
import { Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ModalRegistro = ({ registro, handleCerrar }) => {
  return (
    <Modal show={registro} onHide={handleCerrar}>
      <Modal.Header closeButton className="bg-primary">
        <Modal.Title>
          <b style={{ color: "white" }}>Únete a Nosotros!</b>
        </Modal.Title>
      </Modal.Header>
      <Container>
        <Formik
          initialValues={{ user: "", email: "", pass: "", repeatPass: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "El campo esta vacio!";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Email incorrecto!";
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
            <Container>
              <Form>
                <label className="my-2">
                  <b>Nombre Completo</b>
                </label>
                <Field
                  name="user"
                  values={values.user}
                  className={"form-control"}
                />
                <label className="my-2">
                  <b>Tu Correo electronico</b>
                </label>
                <Field
                  name="email"
                  values={values.email}
                  className={"form-control"}
                />
                <label className="my-2">
                  <b>Contraseña</b>
                </label>
                <Field
                  name="pass"
                  values={values.pass}
                  className={"form-control"}
                />
                <label className="my-2">
                  <b>Repite tu contraseña</b>
                </label>
                <Field
                  name="repeatPass"
                  values={values.repeatPass}
                  className={"form-control"}
                />
                <div className="d-flex justify-content-center">
                  <input
                    type={"submit"}
                    value="Registrarme"
                    className={"btn btn-success w-50 my-2"}
                  />
                </div>
              </Form>
            </Container>
          )}
        </Formik>
      </Container>
    </Modal>
  );
};

export default ModalRegistro;
