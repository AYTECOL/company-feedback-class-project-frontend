import React from 'react';
import './style.css'

const Surveys = ({ survey, onClose }) => {
  const questionsList = survey.questions;

    return (
      <main className="survey-details">
        <div className="container-survey">
          <div className='header-survey'>
            <h2 className="subtitle-survey">Detalles de la Encuesta</h2>
            <div className='close-detailSurvey'>
              <button type="button" onClick={onClose}>X</button>
            </div>
          </div>
          <div className='details-container'>
            <p><strong>URL de la encuesta: </strong>
              <a href={`http://localhost:5173/surveys?email=andersonbt@unicauca.edu.co&surveyId=${survey.surveyId}`}> Link</a>
            </p>
            <p><strong>Nombre de la encuesta:</strong> {survey.name}</p>
            <p><strong>Fecha de creación:</strong> {survey.dateCreated}</p>
            <p><strong>Fecha de publicación:</strong> {survey.datePublished || '-'}</p>
            <p><strong>Fecha de modificación:</strong> {survey.dateModified || '-'}</p>
            <p className='status-survey'><strong>Estado:</strong>
              <div className={`status-container ${survey.published ? 'publish' : 'noPublish'}`}>
                {survey.published ? 'PUBLICADA' : 'NO PUBLICADA'}
              </div>
            </p>
            <div>
              <p><strong>Preguntas:</strong></p>
              <ul>
              {questionsList.map((questionItem, index) => (
                <li key={index}>
                  <p><strong>Pregunta:</strong> {questionItem.question}</p>
                  <p><strong>Tipo:</strong> {questionItem.type === 'open' ? 'Abierta' : 'Cerrada'}</p>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Surveys