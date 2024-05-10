import React from "react";
import { Link } from "react-router-dom";
import FormLogin from "./components/formLogin/FormLogin";
import API from "../../service/API";
import "./style.css";
// import Nbar from "../../components/initial/nbar";

export default function Login() {
  const handleLogin = async ({ email, password }) => {
    try {
      await API("signin", {
        email: email,
        password: password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const token = sessionStorage.getItem("token");
  console.log(token);

  return (
    <>
      <div className="BackgroundLogin">
        <header className="LoginHeader">
          <h2>Inicia sesión en tu cuenta</h2>
          <div className="subtitle">
            <p>¿Aún no tienes una cuenta?</p>
              <Link className="link" to="/register">Registrate</Link>
          </div>
          <div className="flex flex-col space-y-6 mb-6 mt-6">
            <FormLogin handleLogin={handleLogin} />
          </div>
        </header>
      </div>
    </>
  );
}
