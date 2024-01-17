import React, { useReducer, useEffect, useState } from 'react';

// Estado inicial
const initialState = {
  tareas: [],
  categorias: ['Trabajo', 'Personal', 'Estudio'],
  filtro: 'Todas',
};

// Función reducer
function reducer(state, action) {
  switch (action.type) {
    case 'AGREGAR_TAREA':
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
      };
    case 'TOGGLE_COMPLETADO':
      return {
        ...state,
        tareas: state.tareas.map(tarea =>
          tarea.id === action.payload ? { ...tarea, completada: !tarea.completada } : tarea
        ),
      };
    case 'ELIMINAR_TAREA':
      return {
        ...state,
        tareas: state.tareas.filter(tarea => tarea.id !== action.payload),
      };
    case 'CAMBIAR_FILTRO':
      return {
        ...state,
        filtro: action.payload,
      };
    default:
      return state;
  }
}

// Componente TaskManager
const TaskManager = () => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem('taskManagerState');
    return localData ? JSON.parse(localData) : initialState;
  });
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState(state.categorias[0]);

  useEffect(() => {
    localStorage.setItem('taskManagerState', JSON.stringify(state));
  }, [state]);

  const agregarTarea = () => {
    if (nuevaTarea) {
      const nueva = {
        id: Date.now(), // ID simple basado en el tiempo
        texto: nuevaTarea,
        completada: false,
        categoria: nuevaCategoria,
      };
      dispatch({ type: 'AGREGAR_TAREA', payload: nueva });
      setNuevaTarea('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <select
        value={nuevaCategoria}
        onChange={(e) => setNuevaCategoria(e.target.value)}
      >
        {state.categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
      <button onClick={agregarTarea}>Agregar Tarea</button>

      <ul>
        {state.tareas.map((tarea) => (
          <li key={tarea.id} style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => dispatch({ type: 'TOGGLE_COMPLETADO', payload: tarea.id })}
            />
            {tarea.texto} ({tarea.categoria})
            <button onClick={() => dispatch({ type: 'ELIMINAR_TAREA', payload: tarea.id })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
