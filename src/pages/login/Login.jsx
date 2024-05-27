import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormLogin from "./components/formLogin/FormLogin";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import API from "../../service/API";
import backgoundImage from "../../assets/images/mountain.jpg";
import { UserContext } from "../../context/UserContext";
import "./style.css";

export default function Login({ onLogin }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
    const response =  await API("signin", {
        email: email,
        password: password,
      });
      const token = response?.data?.token;
      onLogin(token);
      updateUser({ email, password });
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
      <div 
        className="BackgroundLogin" 
        style={{  backgroundImage: `url(${backgoundImage})` }}>
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
