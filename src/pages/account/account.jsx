import React from 'react';
import './style.css';

export default function Account() {

  return (
    <main className="account">
        <div className='headerText'>
            <h1>Tu cuenta de empresa</h1>
        </div>
        <div className="tab">
            <button lacssName='tablinks'>Perfil</button>
        </div>
      <div className='tabcontent'>
        <article className='sessionData'>
            <h3>Datos de inicio de sesión</h3>
            <div className='fieldProfile'>
                <label >Correo electrónico</label>
                <input type="text" />
            </div>
            <div className='fieldProfile'>
                <label >Contraseña</label>
                <input type="text" />
            </div>
        </article>
        <article className='companyData'>
            <h3>Datos de la compañia</h3>
            <div className='fieldProfile'>
                <label >Nombre de la compañia</label>
                <input type="text" />
            </div>
            <div className='fieldProfile'>
                <label >Razón social</label>
                <input type="text" />
            </div>
            <div className='fieldProfile'>
                <label >Fecha de creación</label>
                <input type="text" />
            </div>
            <div className='fieldProfile'>
                <label >Número de empleados</label>
                <input type="text" />
            </div>
            <div className='fieldProfile'>
                <label >Descripción de la compañia</label>
                <input type="text" />
            </div>
        </article>
      </div>
    </main>
  )
}
