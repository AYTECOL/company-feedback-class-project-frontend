import React, { useEffect, useState } from 'react';
import APIList from '../../service/surveys/APIList.js';
import APICreate from '../../service/surveys/APICreate.js';
import APIPublish from '../../service/surveys/APIPublish.js';
import APIAnswers from '../../service/surveys/APIAnswers.js';
import Surveys from '../../components/surveys/Surveys.jsx';
import EditSurveys from '../../components/surveys/EditSurvey.jsx';
import Modal from 'react-modal';
import "./style.css";

export default function Dashboard() {
  const [surveys, setSurveys] = useState([]);
  const [answeredSurveys, setAnsweredSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newSurvey, setNewSurvey] = useState({ name: '', questions: [], published: false });
  const [questionType, setQuestionType] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('surveys');
  const [errorMessage, setErrorMessage] = useState('');

  const ListSurvey = async () => {
    try {
      const surveys = await APIList("list");
      setSurveys(surveys);
    } catch (error) {
      console.error(error.message);
    }
  };

  const ListAnsweredSurveys = async (surveyId) => {
    if (!surveyId) {
      console.warn('No hay encuenstas respondidas por el momento');
      return;
    }

    try {
      const answeredSurveys = await APIAnswers(`answers/${surveyId}`)
      setAnsweredSurveys(answeredSurveys);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    ListSurvey();
    if (activeTab === 'results') {
      ListAnsweredSurveys();
    }
  }, [activeTab]);

  const handleShowSurvey = (survey) => {
    setSelectedSurvey(survey);
    setIsEditing(false);
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

  const validateSurvey = () => {
    if (!newSurvey.name) {
      return "El nombre de la encuesta es requerido.";
    }
    if (newSurvey.questions.length === 0) {
      return "Debes agregar al menos una pregunta.";
    }
    for (let question of newSurvey.questions) {
      if (!question.question) {
        return "Todas las preguntas deben tener un texto.";
      }
    }
    return null;
  };

  const handleSubmitSurvey = async () => {
    const error = validateSurvey();
    if (error) {
      setErrorMessage(error);
      return;
    }

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="dashboard-survey">
      <h1 className="title">Dashboard</h1>
      <div className="container-dashboard">
      <div className="tabs">
          <button className='tablink' onClick={() => handleTabClick('surveys')}>Mis Encuestas</button>
          <button className='tablink' onClick={() => handleTabClick('results')}>Resultados</button>
      </div>
        <div className='tabcontent-survey'>
        {activeTab === 'surveys' && (
          <>
            <div className='create-survey'>
              <button onClick={handleOpenModal}>Crear encuesta</button>
            </div>
            <table className='surveys-list'>
              <thead>
                <tr>
                  <th>Nombre de encuesta</th>
                  <th>Estado</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {surveys.map(survey => (
                    <tr key={survey.id} className='surveys-list__row'>
                      <td><span>{survey.name}</span></td>
                      <td className='surveyStatus'>
                        <div className={`statusContainer ${survey.published ? 'publish' : 'noPublish'}`}>
                          {survey.published ? 'PUBLICADA' : 'NO PUBLICADA'}
                        </div>
                      </td>
                      <td className='option-buttons'>
                          <button className='button-surveys' id='show' onClick={() => handleShowSurvey(survey)}>Ver</button>
                          <button  className='button-surveys' id='edit' onClick={() => handleEditSurvey(survey)} disabled={survey.published}><span>Editar</span></button>
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
          </>
        )}
        {activeTab === 'results' && (
            <div className='results'>
              {answeredSurveys.length === 0 ? (
                <p>No hay resultados disponibles.</p>
              ) : (
                <table className='results-list'>
                  <thead>
                    <tr>
                      <th>ID de la Encuesta</th>
                      <th>Respuestas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {answeredSurveys.map((survey, index) => (
                      <tr key={index}>
                        <td>{survey.surveyId}</td>
                        <td>{JSON.stringify(survey.answers)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
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
          {errorMessage && <div className="error-message">{errorMessage}</div>}
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
