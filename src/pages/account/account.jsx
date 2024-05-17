import React from 'react';
import { useForm } from "react-hook-form";
import API from '../../service/API';
import './style.css';

export default function Account() {
    const handleUpdate = async ({ companyDescription, numberEmployees, foundation, businessName, companyName }) => {
        try {
            await API("update", {
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
            formState: { errors },
          } = useForm();
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
                <input type="text" {...register("companyName", { required: true })}/>
            </div>
            <div className='fieldProfile'>
                <label >Razón social</label>
                <input type="text" {...register("businessName", { required: true })}/>
            </div>
            <div className='fieldProfile'>
                <label >Fecha de creación</label>
                <input type="text" {...register("foundation", { required: true })}/>
            </div>
            <div className='fieldProfile'>
                <label >Número de empleados</label>
                <input type="text" {...register("numberEmployees", { required: true })}/>
            </div>
            <div className='fieldProfile'>
                <label >Descripción de la compañia</label>
                <input type="text" {...register("companyDescription", { required: true })}/>
            </div>
            <div className='updateButton'>
                <button type='submit'>Actualizar</button>
            </div>
        </form>
      </div>
    </main>
  )
}
