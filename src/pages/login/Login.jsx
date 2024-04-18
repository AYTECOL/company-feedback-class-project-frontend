import React from "react";
import { Link } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import API from "../../service/API";
import "./style.css";

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
    <div className="BackgroundLogin">
      <header className="LoginHeader">
        <h1 className="title">Inicia sesión en tu cuenta</h1>
        <div className="flex flex-row space-x-2 items-center justify-center">
          <h5 className="text-center">¿Aún no tienes una cuenta?</h5>
          <Link
            className="font-bold text-sky-800 hover:text-blue-950"
            to="/register"
          >
            Registrate
          </Link>
        </div>
        <div className="flex flex-col space-y-6 mb-6 mt-6">
          <FormLogin handleLogin={handleLogin} />
        </div>
      </header>
    </div>
  );
}
