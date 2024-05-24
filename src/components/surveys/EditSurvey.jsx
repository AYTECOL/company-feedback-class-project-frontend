import React, { useState } from 'react';
import APIUpdate from '../../service/surveys/APIUpdate';
import './style.css'

const EditSurvey = ({ survey, onSurveyUpdated, onClose }) => {
  const [editableSurvey, setEditableSurvey] = useState(survey);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableSurvey({ ...editableSurvey, [name]: value });
  };

  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQuestions = editableSurvey.questions.map((q, i) => (i === index ? { ...q, [name]: value } : q));
    setEditableSurvey({ ...editableSurvey, questions: updatedQuestions });
  };

  const handleUpdateSurvey = async () => {
    try {
      await APIUpdate(`update/${editableSurvey.surveyId}`, editableSurvey);
      console.log("Encuesta actualizada:", editableSurvey.surveyId);
      onSurveyUpdated();
      onClose();
    } catch (error) {
      console.error("Error al actualizar la encuesta:", error.message);
    }
  };

    return (
      <main className="survey-details">
        <div className="container-survey">
        <div className='header-survey'>
            <h2 className="subtitle-survey">Editar Encuesta</h2>
            <div className='close-detailSurvey'>
              <button type="button" onClick={onClose}>X</button>
            </div>
          </div>
          <div className='details-container'>
            <p><strong>ID de la encuesta:</strong> {survey.surveyId}</p>
            <div className='name-survey'>
            <label>Nombre de la encuesta: </label>
            <input
                type="text"
                name="name"
                value={editableSurvey.name}
                onChange={handleInputChange}
            />
          </div>
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
              <ul className='listEditSurvey'>
              {editableSurvey.questions.map((questionItem, index) => (
                <li key={index}>
                    <input
                        type="text"
                        name="question"
                        value={questionItem.question}
                        onChange={(e) => handleQuestionChange(index, e)}
                    />
                    <select
                        name="type"
                        value={questionItem.type}
                        onChange={(e) => handleQuestionChange(index, e)}
                    >
                    <option value="open">Abierta</option>
                    <option value="closed">Cerrada</option>
                    </select>
                </li>
              ))}
            </ul>
            </div>
            <div className='survey-buttons'>
                <button className='updateSurvey' onClick={handleUpdateSurvey}>Actualizar Encuesta</button>
                <button className='closeSurvey' onClick={onClose}>Cerrar</button>
            </div>
          </div>
        </div>
      </main>
    )
}

export default EditSurvey