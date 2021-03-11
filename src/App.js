import "./App.css";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function App() {
  // User Data
  const [formState, setFormState] = useState({
    email: "",
    pw: "",
    f_name: "",
    l_name: "",
  });

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  // Form Schema
  let schema = yup.object().shape({
    email: yup.string().email().required("This field cannot be left blank"),
    pw: yup
      .string()
      .required("This field cannot be left blank")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    f_name: yup.string().required("This field cannot be left blank"),
    l_name: yup.string().required("This field cannot be left blank"),
  });

  return (
    <div className="App form-box">
      <h4>Create account</h4>
      <Formik
        initialValues={formState}
        validationSchema={schema}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <Form>
          <Field
            className="form-input form-content"
            name="email"
            type="email"
            placeholder="Email *"
          />
          <ErrorMessage name="email">
            {(msg) => <div className="error ">{msg}</div>}
          </ErrorMessage>
          <Field
            className="form-input form-content"
            name="pw"
            type="Password"
            placeholder="Password *"
          />
          <ErrorMessage name="pw">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
          <Field
            className="form-input form-content"
            name="f_name"
            placeholder="First name *"
          />
          <ErrorMessage name="f_name">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
          <Field
            className="form-input form-content"
            name="l_name"
            placeholder="Last name *"
          />
          <ErrorMessage name="l_name">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
          <div>
            <p className="warning form-content">* indicates required field</p>
          </div>
          <button className="register-btn form-content" type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
