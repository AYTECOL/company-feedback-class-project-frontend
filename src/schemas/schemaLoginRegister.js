import * as yup from "yup";

export const loginRegex = {
  email: /^[A-Za-z0-9!#$%&'*/=?^_+`{|}~-]+(\.[A-Za-z0-9!#$%&'*/=?^_+`{|}~-]+)*@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z]{2,})+$/,
  specialCharacters: /.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+.*/,
  mayusCharacter: /[A-Z]/,
};

export const loginValidate = yup.object({
  email: yup
    .string()
    .matches(loginRegex.email, "Debe ingresar un correo electrónico válido")
    .min(6, "Este campo es minimo de 7 caracteres")
    .max(80, "No es un correo electrónico válido")
    .required("Este campo es obligatorio"),
  password: yup
    .string()
    .required("Este campo es obligatorio")
    .min(8, "Debe contener al menos 8 caracteres")
});

export const registerValidate = yup.object({
  email: yup
    .string()
    .matches(loginRegex.email, "No es un correo electrónico válido")
    .min(6, "Este campo es minimo de 7 caracteres")
    .max(80, "No es un correo electrónico válido")
    .required("Este campo es obligatorio"),
  password: yup
    .string()
    .required("Este campo es obligatorio")
    .min(8, "Debe contener al menos 8 caracteres")
    .matches(
      loginRegex.mayusCharacter,
      "Debe contener al menos una letra en mayúscula"
    )
    .matches(
      loginRegex.specialCharacters,
      "Debe contener al menos un caracter especial"
    ),
});