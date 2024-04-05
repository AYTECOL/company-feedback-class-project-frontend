
//import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
//import BoxInput from "../../../components/initial/box-input";
//import userIcon from "../../../assets/images/Register/user.png";
//import passwordIcon from "../../../assets/icons/keyIcon.svg";
//import { loginValidate } from "./schemaLogin";


const FormLogin = ({ handleLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div>
        <label>Correo Electronico:</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span>Este campo es obligatorio</span>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>Este campo es obligatorio</span>}
      </div>
        <button type="submit" style={{cursor: 'pointer'}}>Iniciar Sesión</button>
    </form>
  );
};

export default FormLogin;