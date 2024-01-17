//ToDoApp Component //porque se ve naranja esto???? preguntar a ricardo
import React, { useState } from 'react';

const ToDoApp = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea) {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            {tarea.texto}
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggleCompletada(index)}
            />
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
