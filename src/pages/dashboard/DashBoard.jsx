import React from 'react';

// Componente principal del dashboard
export default function Dashboard() {
  // Supongamos que tienes una lista de encuestas
  const surveys = [
    { id: 1, title: 'Encuesta 1', description: 'Descripción de la encuesta 1' },
    { id: 2, title: 'Encuesta 2', description: 'Descripción de la encuesta 2' },
    { id: 3, title: 'Encuesta 3', description: 'Descripción de la encuesta 3' },
  ];

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <h2 className="text-xl font-bold mb-4">Encuestas</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-center">ID</th>
                <th className="px-4 py-2 text-center">Título</th>
                <th className="px-4 py-2 text-center">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {surveys.map(survey => (
                <tr key={survey.id}>
                  <td className="border px-4 py-2 text-center">{survey.id}</td>
                  <td className="border px-4 py-2 text-center">{survey.title}</td>
                  <td className="border px-4 py-2 text-center">{survey.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
