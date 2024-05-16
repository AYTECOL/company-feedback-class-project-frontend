import React from 'react';
import "./style.css";

// Componente principal del dashboard
export default function Dashboard() {
  const surveys = [
    { id: 1, title: 'Encuesta 1', description: 'Descripción de la encuesta 1' },
    { id: 2, title: 'Encuesta 2', description: 'Descripción de la encuesta 2' },
    { id: 3, title: 'Encuesta 3', description: 'Descripción de la encuesta 3' },
    { id: 4, title: 'Encuesta 4', description: 'Descripción de la encuesta 4' },
    { id: 5, title: 'Encuesta 5', description: 'Descripción de la encuesta 5' },
  ];

  return (
    <main className="dashboard">
      <h1 className="title">Dashboard</h1>
      <div className="container-dashboard">
        <h2 className="subtitle">Encuestas</h2>
        <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {surveys.map(survey => (
                <tr key={survey.id} className='data'>
                  <td>{survey.id}</td>
                  <td>{survey.title}</td>
                  <td>{survey.description}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </main>
  );
}
