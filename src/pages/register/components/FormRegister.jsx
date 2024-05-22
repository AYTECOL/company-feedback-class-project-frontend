import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerValidate } from "../../../schemas/schemaLoginRegister";
import passwordIcon from "../../../assets/password.svg";
import userIcon from "../../../assets/user.svg";
import warningIcon from "../../../assets/warning.svg";
import "./style.css";

const FormRegister = ({ handleSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidate),
    mode: "onChange",
  });
  return (
    <form className="form" onSubmit={handleSubmit(handleSignUp)}>
      <article>
        <label>Correo Electronico:</label>
        <div className="inputField">
          <div className="image">
            <img src={userIcon} alt="" />
          </div>
          <input type="text" {...register("email", { required: true })} />
          </div>
        { errors.email?.message && (
        <span className="warning-message">
          <img src={warningIcon} style={{width: '18px'}} alt="" />
          {errors.email?.message}
        </span>)}
      </article>
      <article>
        <label>Contraseña:</label>
        <div className="inputField">
          <div className="image">
            <img src={passwordIcon} alt="" />
          </div>
        <input type="password" {...register("password", { required: true })} />
        </div>
        { errors.password?.message && (
        <span className="warning-message">
          <img src={warningIcon} style={{width: '18px'}} alt="" />
          {errors.password?.message}
        </span>)}
      </article>
      <article>
        <label>Confirmar Contraseña:</label>
        <div className="inputField">
          <div className="image">
            <img src={passwordIcon} alt="" />
          </div>
          <input
            type="password"
            {...register("passwordConfirmation", { required: true })}
          />
         </div>
        { errors.password?.message && (
        <span className="warning-message">
          <img src={warningIcon} style={{width: '18px'}} alt="" />
          {errors.password?.message}
        </span>)}
      </article>
      <button className="registerButton" type="submit">
        Crear Usuario
      </button>
    </form>
  );
};

export default FormRegister;
