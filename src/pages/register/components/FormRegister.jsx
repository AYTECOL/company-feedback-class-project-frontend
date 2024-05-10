import React from "react";
import { useForm } from "react-hook-form";
import passwordIcon from "../../../assets/password.svg";
import userIcon from "../../../assets/user.svg";
import "./style.css";

const FormRegister = ({ handleSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="form" onSubmit={handleSubmit(handleSignUp)}>
      <article>
        <label>Correo Electronico:</label>
        <div className="inputField">
          <div className="image">
            <img src={userIcon} alt="" />
          </div>
          <input type="text" {...register("email", { required: true })} />
          {errors.email && <span>Este campo es obligatorio</span>}
        </div>
      </article>
      <article>
        <label>Contraseña:</label>
        <div className="inputField">
          <div className="image">
            <img src={passwordIcon} alt="" />
          </div>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Este campo es obligatorio</span>}
        </div>
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
          {errors.passwordConfirmation && <span>Este campo es obligatorio</span>}
        </div>
      </article>
      <button className="registerButton" type="submit">
        Crear Usuario
      </button>
    </form>
  );
};

export default FormRegister;
