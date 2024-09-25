
import React from 'react';

const ListTareas = ({ tareas, handleCompletarTarea, deleteTarea}) => {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id} style={{ textDecoration: tarea.isComplete ? 'line-through' : 'none', color: tarea.isComplete ? 'red' : 'black', margin: 5 }}>
          {tarea.name}
          <button onClick={() => handleCompletarTarea(tarea.id)}>
            {tarea.isComplete ? 'Desmarcar' : 'Completar'}
          </button>
          <button onClick={() => deleteTarea(tarea.id)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
};

export default ListTareas;