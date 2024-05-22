import React, { useEffect, useState } from 'react';
import APIList from '../../service/surveys/APIList';
import "./style.css";
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [surveys, setSurveys] = useState([]);

  const ListSurvey = async () => {
    try {
      const surveys = await APIList("list");
      setSurveys(surveys);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    ListSurvey();
  }, []);

  return (
    <main className="dashboard">
      <h1 className="title">Dashboard</h1>
      <div className="container-dashboard">
      <div className="tabs">
          <button className='tablink'>Mis Encuestas</button>
          <button className='tablink'>Resultados</button>
      </div>
      <div className='tabcontent-survey'>
        <table className='surveys-list'>
          <thead>
            <tr>
              <th>Nombre de encuesta</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {surveys.map(survey => (
                <tr key={survey.id} className='surveys-list__row'>
                  <td><span>{survey.name}</span></td>
                  <td>
                      <Link className='button-surveys' id='update' to={'run/' + survey.id}><span>Actualizar</span></Link>
                      <Link className='button-surveys' id='edit' to={'run/' + survey.id}><span>Editar</span></Link>
                      <Link className='button-surveys' id='publish' to={'edit/' + survey.id}><span>Publicar</span></Link>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <table className="table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Fecha de creación</th>
                <th>Fecha de publicación</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
            {surveys.map(survey => (
                <tr key={survey.surveyId} className='data'>
                  <td>{survey.name}</td>
                  <td>{survey.dateCreated }</td>
                  <td>{survey.datePublished }</td>
                  <td>{survey.published  ? 'Publicada' : 'No publicada'}</td>
                </tr>
              ))}
            </tbody>
        </table> */}
      </div>
      </div>
    </main>
  );
}
