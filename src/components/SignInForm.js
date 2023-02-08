import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignInForm.css";

const SignInForm = () => {
  const initialValues = {
    emailAdmin: "",
    passwordAdmin: "",
  };
  const navigate = useNavigate();
  const [alertSignIn, setAlertSignIn] = useState(false);
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    };
    const data = {
      email: values.emailAdmin,
      password: values.passwordAdmin,
    };

    axios
      .post(`${urlAPI}/admin/auth/login`, data, config)
      .then(async (res) => {
        const tempAccessToken = res.data.access_token;
        localStorage.setItem("accessToken", JSON.stringify(tempAccessToken));
        setAlertSignIn(null);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setAlertSignIn(true);
      });
  };

  return (
    <div id="componentSignInForm">
      {alertSignIn ? (
        <div className="alertBox d-flex align-items-center">
          <p>Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</p>
        </div>
      ) : null}
      <form id="signInForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="emailAdmin" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" name="emailAdmin" id="emailAdmin" placeholder="Contoh: johndee@gmail.com" defaultValue={values.emailAdmin} onChange={handleInputChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordAdmin" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" name="passwordAdmin" id="passwordAdmin" placeholder="6+ karakter" defaultValue={values.passwordAdmin} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary signInSubmit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
