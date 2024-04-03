import React from "react";
import { useForm } from "react-hook-form";

const FormRegister = ({ handleSignUp }) => {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
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
      <div>
        <label>Confirmar Contraseña:</label>
        <input type="password" {...register('passwordConfirmation', { required: true })} />
        {errors.passwordConfirmation && <span>Este campo es obligatorio</span>}
      </div>
      <button type="submit" style={{cursor: 'pointer'}}>Crear Usuario</button>
    </form>
  );
};

export default FormRegister;
