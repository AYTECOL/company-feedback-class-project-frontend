import React, { useEffect, useState } from 'react'
import APIGetSurveys from '../../service/surveys/APIGetSurveys';
import './style.css'

export const UserSurveys = () => {
  const [survey, setSurvey] = useState(null);

  const ListSurvey = async () => {
    try {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const email = urlParams.get('email');
      const surveyId = urlParams.get('surveyId');

      if (email && surveyId) {
        const surveyData = await APIGetSurveys({ email, surveyId });
        setSurvey(surveyData);

        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        console.error('Missing email or surveyId in URL parameters');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    ListSurvey();
  }, []);

  return (
    <div>
      {survey ? (
        <main className="survey-details">
          <div className="container-survey">
            <div className='header-survey'>
              <h2 className="subtitle-survey">Detalles de la Encuesta</h2>
            </div>
            <p>Nuestros clientes son primero!.</p>
            <span>Y es por medio de la siguiente encuesta según tu esperiencia, nos evaluarás como empresa que te brindó un servicio.</span> 
            <span>Ello nos permite mejorar dia a dia como empresa</span>
            <div className='details-container'>
              <p><strong>Nombre de la encuesta:</strong> {survey.name}</p>
              <div>
                <p><strong>Preguntas:</strong></p>
                <ul>
                  {survey.questions.map((questionItem, index) => (
                    <li key={index}>
                      <p><strong>Pregunta: </strong> {questionItem.question}</p>
                      {questionItem.type === 'open' ? (
                        <input type="text" name={`question-${index}`} />
                      ) : (
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
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <p>Cargando encuesta...</p>
      )}
    </div>
  )
}

export default UserSurveys;