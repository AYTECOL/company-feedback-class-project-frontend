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
        <label>Usuario:</label>
        <input type="text" {...register('correoElectronico', { required: true })} />
        {errors.correoElectronico && <span>Este campo es obligatorio</span>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" {...register('contrasena', { required: true })} />
        {errors.contrasena && <span>Este campo es obligatorio</span>}
      </div>
      <div>
        <label>Confirmar Contraseña:</label>
        <input type="password" {...register('confContrasena', { required: true })} />
        {errors.confContrasena && <span>Este campo es obligatorio</span>}
      </div>
      <button type="submit" style={{cursor: 'pointer'}}>Crear Usuario</button>
    </form>
  );
};

export default FormRegister;
