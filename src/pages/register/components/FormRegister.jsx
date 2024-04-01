//import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
//import BoxInput from "../../../components/initial/box-input";

const FormRegister = ({ handleSignUp }) => {
   const {
        register,
        handleSubmit,
        setValue,
        trigger,
        getValues,
        formState: { errors },
      } = useForm({
        //resolver: yupResolver(registerValidate),
        mode: "onChange",
      });

      const handleEmailChange = (e) => {
        const value = e.target.value.replaceAll(" ", "");
        setValue("email", value, { shouldValidate: true });
      };

      return (
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div>
            <label>Usuario:</label>
            <input type="email" {...register('usuario', { required: true })} />
            {errors.usuario && <span>Este campo es obligatorio</span>}
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" {...register('contraseña', { required: true })} />
            {errors.contraseña && <span>Este campo es obligatorio</span>}
          </div>
          <div>
            <label>Confirmar Contraseña:</label>
            <input type="password" {...register('confirmarContraseña', { required: true })} />
            {errors.confirmarContraseña && <span>Este campo es obligatorio</span>}
          </div>
          <button type="submit">Crear Usuario</button>
        </form>
      );
};

export default FormRegister;
