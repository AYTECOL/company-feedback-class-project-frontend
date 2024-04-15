import React from "react";
import { Link } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import API from "../../service/API";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Login() {
  const [token, SET_TOKEN] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }) => {
    try {
      // Hacer la solicitud al backend para iniciar sesión
      const response = await API("signin", {
        email: email,
        password: password,
      });

      // Verificar si la solicitud fue exitosa
      if (response.status === 200) {
        // Extraer el token de la respuesta
        const token = response.data;
        console.log(token);

        // Almacenar el token en el estado global usando Redux
        //dispatch(SET_TOKEN(token));
      } else {
        console.error("Error de inicio de sesión:", response.data.error);
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }

    return (
      <div>
        <header className="text-center bg-zinc-100 shadow-lg rounded-xl p-6 max-w-[390px] min-w-[390px] box-border mx-32 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-7 text-center">
            Inicia sesión en tu cuenta
          </h1>
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
  };
}
