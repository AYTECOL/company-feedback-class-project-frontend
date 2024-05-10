//import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import passwordIcon from "../../../../assets/password.svg";
import userIcon from "../../../../assets/user.svg";
//import BoxInput from "../../../components/initial/box-input";
//import passwordIcon from "../../../assets/icons/keyIcon.svg";
//import { loginValidate } from "./schemaLogin";
import "./style.css";

const FormLogin = ({ handleLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="form" onSubmit={handleSubmit(handleLogin)}>
      <article>
        <label>Correo Electronico:</label>
        <div className="inputField">
          <div className="image">
            <img src={userIcon} alt="" />
          </div>
          <input  type="text" {...register("email", { required: true })} />
          {errors.email && <span>Este campo es obligatorio</span>}
        </div>
      </article>
      <article>
        <label>Contraseña:</label>
        <div className="inputField">
          <div className="image">
            <img src={passwordIcon}alt="" />
          </div>
          <input type="password" {...register("password", { required: true })} />
          {errors.password && <span>Este campo es obligatorio</span>}
        </div>
      </article>
      <button className="loginButton" type="submit">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default FormLogin;
