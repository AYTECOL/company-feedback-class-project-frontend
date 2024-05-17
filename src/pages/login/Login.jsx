import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormLogin from "./components/formLogin/FormLogin";
import { Circles } from "react-loader-spinner";
import API from "../../service/API";
import "./style.css";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      await API("signin", {
        email: email,
        password: password,
      });
      navigate("/dashboard")  
    } catch (error) {
      alert("Usuario no válido");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
      )}
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
