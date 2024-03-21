import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

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
        <form onSubmit={handleSubmit(handleSignUp)} className="max-w-md mx-auto">
          <div className="flex flex-col space-y-6 mt-6">
            <label htmlFor="nombreCompleto" className="text-sm font-semibold">
              Nombre completo:
            </label>
            <input
              id="nombreCompleto"
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
      
            <label htmlFor="numeroCelular" className="text-sm font-semibold">
              Número de celular:
            </label>
            <input
              id="numeroCelular"
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
      
            <label htmlFor="correoElectronico" className="text-sm font-semibold">
              Correo electrónico:
            </label>
            <input
              id="correoElectronico"
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
      
            <label htmlFor="contrasena" className="text-sm font-semibold">
              Contraseña:
            </label>
            <input
              id="contrasena"
              type="password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-4 w-full"
            type="submit"
          >
            Continuar
          </button>
        </form>
  );
};

export default FormRegister;
