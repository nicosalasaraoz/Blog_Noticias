import { Field, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ModalRegistro = ({ registro, handleCerrar }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  const handleSubmitBack = (e) => {
    e.preventDefault();

    fetch("http://localhost:3002/user/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        pass: pass,
        repeatPass: repeatPass,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <Modal show={registro} onHide={handleCerrar}>
      <Modal.Header closeButton className="bg-navbar">
        <Modal.Title>
          <b style={{ color: "white" }}>Únete a Nosotros!</b>
        </Modal.Title>
      </Modal.Header>
      <Container>
        <Formik
          initialValues={{ user: "", email: "", pass: "", repeatPass: "" }}
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

            if (!values.pass) {
              errors.pass = "El campo esta vacio, completalo!";
            } else if (
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/i.test(
                values.pass
              )
            ) {
              errors.pass =
                "Tu contraseña debe tener al menos una Mayuscula, una Minuscula y un Numero!";
            }

            if (!values.repeatPass) {
              errors.repeatPass = "El campo esta vacio, completalo!";
            } else if (
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/i.test(
                values.repeatPass
              )
            ) {
              errors.pass =
                "Tu contraseña debe tener al menos una Mayuscula, una Minuscula y un Numero!";
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
                  onInput={(e) => setName(e.target.value)}
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
                  <b>Tu Correo electronico</b>
                </label>
                <Field
                  onInput={(e) => setEmail(e.target.value)}
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
                <label className="my-2">
                  <b>Contraseña</b>
                  <p className="mt-1">
                    <small>
                      Debe contener una letra Mayuscula, una Minuscula, un
                      numero y un caracter especial. Ejemplo: Rollingnews27#
                    </small>
                  </p>
                </label>
                <Field
                  onInput={(e) => setPass(e.target.value)}
                  type="password"
                  name="pass"
                  values={values.pass}
                  className={`form-control ${
                    errors.pass && touched.pass && "is-invalid"
                  }`}
                />
                <div style={{ color: "red" }} className="mt-1">
                  {errors.pass && touched.pass && errors.pass}
                </div>
                <br />
                <label className="my-2">
                  <b>Repite tu contraseña</b>
                </label>
                <Field
                  onInput={(e) => setRepeatPass(e.target.value)}
                  type="password"
                  name="repeatPass"
                  values={values.repeatPass}
                  className={`form-control ${
                    errors.repeatPass && touched.repeatPass && "is-invalid"
                  }`}
                />
                <div style={{ color: "red" }} className="mt-1">
                  {errors.repeatPass && touched.repeatPass && errors.repeatPass}
                </div>
                <br />
                <div className="d-flex justify-content-center">
                  <input
                    onClick={(e) => handleSubmitBack(e)}
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
