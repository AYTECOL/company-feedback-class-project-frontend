import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import APIUPDATE from '../../service/ApiUpdate';
import { accountValidate } from '../../schemas/schemaAccount';
import './style.css';

export default function Account() {
    const handleUpdate = async ({ companyDescription, numberEmployees, foundation, businessName, companyName }) => {
        try {
            await APIUPDATE("update", {
                companyName: companyName,
                businessName: businessName,
                foundation: foundation,
                numberEmployees: numberEmployees,
                companyDescription: companyDescription
            });
        } catch (error) {
            console.error(error);
        }
        };

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(accountValidate),
        mode: "onChange",
    });

    const handleFoundationChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 8) {
            value = value.slice(0, 8);
        }
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        if (value.length > 5) {
            value = value.slice(0, 5) + '/' + value.slice(5);
        }
        setValue('foundation', value);
    };

    const handleNumberChange = (e, field) => {
        const value = e.target.value.replace(/\D/g, '');
        setValue(field, value);
    };

    const specialCharacters = /.*[!@#$%^&*()+\=[\]{};':"\\|<>/?]+.*/g;
    const handleLettersChange = (e, field) => {
        const value = e.target.value.replace(specialCharacters, '');
        setValue(field, value);
    };

    return (
        <main className="account">
            <div className='headerText'>
                <h1>Tu cuenta de empresa</h1>
            </div>
            <div className="tab">
                <button lacssName='tablinks'>Perfil</button>
            </div>
        <div className='tabcontent'>
            <form className='sessionData'>
                <h3>Datos de inicio de sesión</h3>
                <div className='fieldProfile'>
                    <label >Correo electrónico</label>
                    <input type="text" />
                </div>
                <div className='fieldProfile'>
                    <label >Contraseña</label>
                    <input type="password" />
                </div>
                <div className='updateButton'>
                    <button disabled>Actualizar</button>
                </div>
            </form>
            <form className='companyData' onSubmit={handleSubmit(handleUpdate)}>
                <h3>Datos de la compañia</h3>
                <div className='fieldProfile'>
                    <label >Nombre de la compañia</label>
                    <input 
                        type="text" 
                        {...register("companyName", { required: true })}
                        onChange={(e) => handleLettersChange(e, "companyName")}

                    />
                    <span>{errors.companyName?.message}</span>
                </div>
                <div className='fieldProfile'>
                    <label >Razón social</label>
                    <input 
                        type="text" 
                        {...register("businessName", { required: true })}
                        onChange={(e) => handleNumberChange(e, "businessName")}
                    />
                    <span>{errors.businessName?.message}</span>
                </div>
                <div className='fieldProfile'>
                    <label >Fecha de creación</label>
                    <input 
                        type="text" 
                        {...register("foundation", { required: true })} 
                        onChange={handleFoundationChange}
                        maxLength={10}
                    />
                    <span>{errors.foundation?.message}</span>
                </div>
                <div className='fieldProfile'>
                    <label >Número de empleados</label>
                    <input 
                        type="text" 
                        {...register("numberEmployees", { required: true })}
                        onChange={(e) => handleNumberChange(e, "numberEmployees")}
                    />
                    <span>{errors.numberEmployees?.message}</span>
                </div>
                <div className='fieldProfile'>
                    <label >Descripción de la compañia</label>
                    <input 
                        type="text" 
                        {...register("companyDescription", { required: true })}
                    />
                    <span>{errors.companyDescription?.message}</span>
                </div>
                <div className='updateButton'>
                    <button type='submit'>Actualizar</button>
                </div>
            </form>
        </div>
        </main>
    )
}
