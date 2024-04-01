import React from "react";
import { Link } from "react-router-dom";
import FormRegister from "./components/FormRegister";
import API from "../../service/API";

const Register = () => {
  const handleSignUp = async ({ correoElectronico, contrasena}) => {
    try {
      await (
        API("create",{
          username: correoElectronico,
          password: contrasena,
        })
      );
    } catch (error) {
      errorAlert(error.message)
    }
  };
  
    return (
      <div className="justify-center h-[100%] py-[13vh] flex items-center">
        <header className="bg-zinc-200 px-8 py-10 max-w-[390px] min-w-[390px] rounded-lg">
          <h1 className="text-4xl font-bold mb-7 flex items-center justify-center">
            Regístrate
          </h1>
          <div className="flex flex-row space-x-2 items-center justify-start">
            <h5 className="text-center">¿Ya tienes una cuenta?</h5>
            <Link
              className="font-bold text-sky-800 hover:text-blue-950"
              to="/login"
            >
              Iniciar sesión
            </Link>
          </div>
          <FormRegister handleSignUp={handleSignUp} />
        </header>
      </div>
    );
  };
  
  export default Register;
  