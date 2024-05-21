import * as yup from "yup";

export const accountRegex = {
  allowOnlyNumber: /^\d+$/,
  allowOnlyText: /^[A-Za-záéíóúÁÉÍÓÚÖÜÄäüö ]+$/,
  onlyDate: /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/,
  // email:
  //   /^[A-Za-z0-9!#$%&'*/=?^_+`{|}~-]+(\.[A-Za-z0-9!#$%&'*/=?^_+`{|}~-]+)*@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z]{2,})+$/,
  // specialCharacters: /.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+.*/,
  // mayusCharacter: /[A-Z]/,
};

export const accountValidate = yup.object({
  companyName: yup
    .string()
    .matches(accountRegex.allowOnlyText, "Debe ingresar solo caracteres alfabéticos")
    .required("Este campo es obligatorio"),
  businessName: yup
    .string()
    .matches(accountRegex.allowOnlyNumber, "Debe ingresar solo caracteres alfabéticos")
    .required("Este campo es obligatorio"),
  foundation: yup
    .string()
    .matches(accountRegex.onlyDate, "Debe ingresar una fecha válida")
    .required("Este campo es obligatorio"),
  numberEmployees: yup
    .string()
    .matches(accountRegex.allowOnlyNumber, "Debe ingresar solo números")
    .required("Este campo es obligatorio"),
  companyDescription: yup
    .string()
    .required("Este campo es obligatorio"),
});
