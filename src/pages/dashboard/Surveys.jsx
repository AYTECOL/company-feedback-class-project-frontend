import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Surveys.css'

const Surveys = () => {
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
          <h2 className="subtitle">Encuestas</h2>
          <table className="table">
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
          </table>
        </div>
      </main>
        // <table className='sjs-surveys-list'>
        //     {surveys.map(survey => 
        //         <tr key={survey.id} className='sjs-surveys-list__row'>
        //             <td><span>{survey.name}</span></td>
        //             <td>
        //                 <Link className='sjs-button' to={'run/' + survey.id}><span>Run</span></Link>
        //                 <Link className='sjs-button' to={'edit/' + survey.id}><span>Edit</span></Link>
        //                 <Link className='sjs-button' to={'results/' + survey.id}><span>Results</span></Link>
        //                 <span className='sjs-button sjs-remove-btn' onClick={() => dispatch(remove(survey.id))}>Remove</span>
        //             </td>
        //         </tr>
        //     )}
        // </table>
        // <div className='sjs-surveys-list__footer'>
        //     <span className='sjs-button sjs-add-btn' title='increment' onClick={() => dispatch(create())}>Add Survey</span>                        
        // </div>
    )
}

export default Surveys