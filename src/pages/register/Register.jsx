import React from "react";
import { Link } from "react-router-dom";
import FormRegister from "./components/FormRegister";
import API from "../../service/API";
import backgoundImage from "../../assets/images/figure.jpg";
import "./style.css";

const Register = () => {
  const handleSignUp = async ({ email, password, passwordConfirmation }) => {
    try {
      await API("create", {
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div 
      className="BackgroundRegister"
      style={{  backgroundImage: `url(${backgoundImage})` }}
    >
      <header className="RegisterHeader">
        <h2>Regístrate</h2>
        <div className="subtitle">
          <p>¿Ya tienes una cuenta?</p>
          <Link className="link" to="/login">Iniciar sesión</Link>
        </div>
        <FormRegister handleSignUp={handleSignUp} />
      </header>
    </div>
  );
};

export default Register;
