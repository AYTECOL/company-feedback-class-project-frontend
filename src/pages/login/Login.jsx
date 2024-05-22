import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormLogin from "./components/formLogin/FormLogin";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import API from "../../service/API";
import "./style.css";

export default function Login({ onLogin }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
     await API("signin", {
        email: email,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      alert("Usuario no válido");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingSpinner />}
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
