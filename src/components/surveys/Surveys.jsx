import React from 'react';
import './style.css'

const Surveys = ({ survey }) => {
  const questionsList = survey.questions;

    return (
      <main className="survey-details">
        <div className="container-survey">
          <h2 className="subtitle-survey">Detalles de la Encuesta</h2>
          <div className='details-container'>
            <p><strong>ID de la encuesta:</strong> {survey.surveyId}</p>
            <p><strong>Nombre de la encuesta:</strong> {survey.name}</p>
            <p><strong>Fecha de creación:</strong> {survey.dateCreated}</p>
            <p><strong>Fecha de publicación:</strong> {survey.datePublished || '-'}</p>
            <p><strong>Fecha de modificación:</strong> {survey.dateModified || '-'}</p>
            <p><strong>Estado:</strong> {survey.published ? 'Publicada' : 'No publicada'}</p>
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