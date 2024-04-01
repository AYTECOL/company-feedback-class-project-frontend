// /* eslint-disable */
// import {
//     FormHelperText,
//     IconButton,
//     OutlinedInput,
//     InputAdornment,
//     InputLabel,
//     Box,
//     Tooltip,
//   } from "@mui/material";
//   import HelpIcon from "@mui/icons-material/Help";
//   import React, { useState } from "react";
  
//   export default function BoxInput({
//     error,
//     name,
//     label,
//     type,
//     validate,
//     helperText,
//     required,
//     setValue,
//     trigger,
//     register,
//     Icon,
//     placeholder,
//     noStyle,
//     direction = "column",
//     alterNativeText = "",
//     textHelp,
//     onChange = (f) => f,
//   }) {
//     const [showPassword, setShowPassword] = useState({});
//     const handleClickShowPassword = (id) =>
//       setShowPassword((show) => ({ ...show, [id]: !show[id] }));
//     const handleMouseDownPassword = (event) => {
//       event.preventDefault();
//     };
//     const showPasswordType = showPassword.password ? "text" : "password";
//     const typeInput = type == "password" ? showPasswordType : type;
//     const backgroundErrorImage = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3E%3C/svg%3E")`;
//     const backgroundValidateImage = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%2366d432' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E")`;
  
//     const validateInput = (value) => {
//       if (type === "phone_number") {
//         return /^[0-9]+$/.test(value);
//       } else if (type === "email") {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//       }
//       return true;
//     };
  
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: direction,
//           justifyContent: "flex-start",
//           width: "100%",
//         }}
//       >
//         <InputLabel
//           sx={{
//             color: "colors.blueText",
//             fontSize: "1rem",
//             display: "flex",
//             flexDirection: "row",
//             gap: "2px",
//           }}
//           htmlFor={`input-${name}`}
//         >
//           <div className="flex items-center gap-x-2 py-1 font-['sans-serif']">
//             {Icon && (
//                <img src={Icon} style={{ width: "20px", height: "20px" }} />
//             )}
//             {label}
//           </div>
//           {textHelp && (
//             <Tooltip
//               sx={{ cursor: "pointer", marginLeft: "4px" }}
//               title={textHelp}
//               arrow
//             >
//               <HelpIcon fontSize="small" />
//             </Tooltip>
//           )}
//         </InputLabel>
//         <OutlinedInput
//           sx={[
//             {
//               height: "2.5rem",
//               fontSize: "0.875rem",
//               paddingRight: "0px",
//               borderRadius: "0.5rem",
//               fontWeight: "400",
//               backgroundRepeat: "no-repeat",
//               width: "100%",
//               color: "rgb(73, 80, 87) !important",
//               backgroundColor: "#FFF",
//               backgroundPosition: `right ${
//                 type == "password" ? "40px" : "0.75rem"
//               } center`,
//               backgroundSize: "1rem 1rem",
//               "&:hover,&.Mui-focused": {
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "colors.blue",
//                 },
//               },
//             },
//             error &&
//               !noStyle && {
//                 backgroundImage: backgroundErrorImage,
//                 "&:hover,&.Mui-focused": {
//                   "& .MuiOutlinedInput-notchedOutline": {
//                     borderColor: "colors.red",
//                   },
//                 },
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "colors.red",
//                 },
//               },
//             !error &&
//               validate &&
//               !noStyle && {
//                 backgroundImage: backgroundValidateImage,
//                 "&:hover,&.Mui-focused": {
//                   "& .MuiOutlinedInput-notchedOutline": {
//                     borderColor: "colors.green",
//                   },
//                 },
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "colors.green",
//                 },
//               },
//           ]}
//           id={`input-${name}`}
//           variant="outlined"
//           placeholder={placeholder || label}
//           type={typeInput}
//           autoComplete="off"
//           {...register(name, { required: required })}
//         />
//       </Box>
//     );
//   }
  