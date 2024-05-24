import React, { useEffect, useState } from 'react';
import APIList from '../../service/surveys/APIList.js';
import APICreate from '../../service/surveys/APICreate.js';
import APIPublish from '../../service/surveys/APIPublish.js';
import Surveys from '../../components/surveys/Surveys.jsx';
import EditSurveys from '../../components/surveys/EditSurvey.jsx';
import Modal from 'react-modal';
import "./style.css";

export default function Dashboard() {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newSurvey, setNewSurvey] = useState({ name: '', questions: [], published: false });
  const [questionType, setQuestionType] = useState('');
  const [isEditing, setIsEditing] = useState(false);

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

  const handleShowSurvey = (survey) => {
    setSelectedSurvey(survey);
  };

  const handleEditSurvey = (survey) => {
    setSelectedSurvey(survey);
    setIsEditing(true);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setNewSurvey({ name: '', questions: [], published: false });
  };

  const handleCloseEditSurvey = () => {
    setSelectedSurvey(null);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSurvey({ ...newSurvey, [name]: value });
  };

  const handleAddQuestion = () => {
    const question = { question: '', type: questionType };
    setNewSurvey({ ...newSurvey, questions: [...newSurvey.questions, question] });
  };

  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQuestions = newSurvey.questions.map((q, i) => (i === index ? { ...q, [name]: value } : q));
    setNewSurvey({ ...newSurvey, questions: updatedQuestions });
  };

  const handleSubmitSurvey = async () => {
    try {
      await APICreate("create", newSurvey);
      handleCloseModal();
      ListSurvey();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handlePublishSurvey = async (surveyId) => {
    try {
      await APIPublish(`publish/${surveyId}`);
      ListSurvey();
    } catch (error) {
      console.error("Error al publicar la encuesta:", error.message);
    }
  };

  return (
    <main className="dashboard-survey">
      <h1 className="title">Dashboard</h1>
      <div className="container-dashboard">
      <div className="tabs">
          <button className='tablink'>Mis Encuestas</button>
          <button className='tablink'>Resultados</button>
      </div>
        <div className='tabcontent-survey'>
          <div className='create-survey'>
            <button onClick={handleOpenModal}>Crear encuesta</button>
          </div>
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
                    <td className='option-buttons'>
                        <button className='button-surveys' id='show' onClick={() => handleShowSurvey(survey)}>Ver</button>
                        <button  className='button-surveys' id='edit' onClick={() => handleEditSurvey(survey)}><span>Editar</span></button>
                        <button className='button-surveys' id='publish' onClick={() => handlePublishSurvey(survey.surveyId)}><span>Publicar</span></button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedSurvey && isEditing ? (
            <EditSurveys survey={selectedSurvey} onSurveyUpdated={ListSurvey} onClose={handleCloseEditSurvey}/>
          ) : selectedSurvey ? (
            <Surveys survey={selectedSurvey} onClose={handleCloseEditSurvey}/>
          ) : null}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Crear Nueva Encuesta"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className='modal-container'>
          <div className='modal-container-closeButton'>
            <div type="button" onClick={handleCloseModal}>X</div>
          </div>
          <h2>Crear Nueva Encuesta</h2>
          <form>
            <div className='name-survey'>
              <label>Nombre de Encuesta</label>
              <input type="text" name="name" value={newSurvey.name} onChange={handleInputChange} />
            </div>
            <div className='type-survey'>
              <label>Tipo de Pregunta</label>
              <div className='survey-select'>
                <select onChange={(e) => setQuestionType(e.target.value)} value={questionType}>
                  <option value="">Selecciona un tipo</option>
                  <option value="open">Abierta</option>
                  <option value="closed">Cerrada</option>
                </select>
                <button type="button" onClick={handleAddQuestion}>Agregar Pregunta</button>
              </div>
            </div>
            <div>
              {newSurvey.questions.map((question, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="question"
                    placeholder="Escribe tu pregunta aquí"
                    value={question.question}
                    onChange={(e) => handleQuestionChange(index, e)}
                  />
                  {question.type === 'closed' && (
                    <div className='closed-question'>
                      <label>
                        <input type="radio" name={`question-${index}`} value="1" /> 1
                      </label>
                      <label>
                        <input type="radio" name={`question-${index}`} value="2" /> 2
                      </label>
                      <label>
                        <input type="radio" name={`question-${index}`} value="3" /> 3
                      </label>
                      <label>
                        <input type="radio" name={`question-${index}`} value="4" /> 4
                      </label>
                      <label>
                        <input type="radio" name={`question-${index}`} value="5" /> 5
                      </label>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className='buttons-surveys'>
              <button 
                type="button"
                id='survey-add'
                onClick={handleSubmitSurvey}
              >
                Crear Encuesta
              </button>
              <button 
                type="button"
                id='survey-cancel'
                onClick={handleCloseModal}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal>

    </main>
  );
}
