import React, { useEffect, useState } from 'react';
import APIList from '../../service/surveys/APIList';
import "./style.css";
import { Link } from 'react-router-dom';
import Surveys from '../../components/surveys/Surveys.jsx';

export default function Dashboard() {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);

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

  return (
    <main className="dashboard-survey">
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
                        <button className='button-surveys' id='show' onClick={() => handleShowSurvey(survey)}>Ver</button>
                        <Link className='button-surveys' id='update' to={'run/' + survey.id}><span>Actualizar</span></Link>
                        <Link className='button-surveys' id='edit' to={'run/' + survey.id}><span>Editar</span></Link>
                        <Link className='button-surveys' id='publish' to={'edit/' + survey.id}><span>Publicar</span></Link>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedSurvey && <Surveys survey={selectedSurvey} />}
        </div>
      </div>
    </main>
  );
}
