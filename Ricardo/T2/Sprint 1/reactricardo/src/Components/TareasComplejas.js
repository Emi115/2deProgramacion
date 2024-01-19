import { useReducer, useEffect, useState } from 'react';

const estadoInicial = {
  tareas: [],
  categorias: ['Trabajo', 'Personal', 'Estudio'],
  filtro: 'Todas',
};

function reductor(estado, accion) {
  switch (accion.type) {
    case 'AGREGAR_TAREA':
      return {
        ...estado,
        tareas: [...estado.tareas, accion.payload],
      };
    case 'TOGGLE_COMPLETADO':
      return {
        ...estado,
        tareas: estado.tareas.map(tarea =>
          tarea.id === accion.payload ? { ...tarea, completada: !tarea.completada } : tarea
        ),
      };
    case 'ELIMINAR_TAREA':
      return {
        ...estado,
        tareas: estado.tareas.filter(tarea => tarea.id !== accion.payload),
      };
    case 'CAMBIAR_FILTRO':
      return {
        ...estado,
        filtro: accion.payload,
      };
    case 'EDITAR_TAREA':
      return {
        ...estado,
        tareas: estado.tareas.map(tarea =>
          tarea.id === accion.payload.id ? { ...tarea, texto: accion.payload.texto } : tarea
        ),
      };
    default:
      return estado;
  }
}

const TaskManager = () => {
  const [estado, despachar] = useReducer(reductor, estadoInicial, () => {
    const datosLocales = localStorage.getItem('estadoGestorTareas');
    return datosLocales ? JSON.parse(datosLocales) : estadoInicial;
  });
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState(estado.categorias[0]);

  useEffect(() => {
    localStorage.setItem('estadoGestorTareas', JSON.stringify(estado));
  }, [estado]);

  const agregarTarea = () => {
    if (nuevaTarea) {
      const nueva = {
        id: Date.now(),
        texto: nuevaTarea,
        completada: false,
        categoria: nuevaCategoria,
      };
      despachar({ type: 'AGREGAR_TAREA', payload: nueva });
      setNuevaTarea('');
    }
  };

  const filtrarTareas = (categoria) => {
    despachar({ type: 'CAMBIAR_FILTRO', payload: categoria });
  };

  const editarTarea = (id, nuevoTexto) => {
    despachar({ type: 'EDITAR_TAREA', payload: { id, texto: nuevoTexto } });
  };

  return (
    <div className="gestor-tareas-container">
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
        className="input-tarea"
      />
      <select
        value={nuevaCategoria}
        onChange={(e) => setNuevaCategoria(e.target.value)}
        className="select-categoria"
      >
        {estado.categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
      <button onClick={agregarTarea} className="boton-agregar">
        Agregar Tarea
      </button>

      <div className="filtros">
        <span>Filtrar por:</span>
        {estado.categorias.map((categoria, index) => (
          <button key={index} onClick={() => filtrarTareas(categoria)}>
            {categoria}
          </button>
        ))}
        <button onClick={() => filtrarTareas('Todas')}>Todas</button>
      </div>

      <ul className="lista-tareas">
        {estado.tareas
          .filter(tarea => estado.filtro === 'Todas' || tarea.categoria === estado.filtro)
          .map((tarea) => (
            <li key={tarea.id} className={tarea.completada ? 'tarea-completada' : ''}>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => despachar({ type: 'TOGGLE_COMPLETADO', payload: tarea.id })}
              />
              <span
                className={tarea.completada ? 'texto-tachado' : ''}
                contentEditable={!tarea.completada}
                onBlur={(e) => editarTarea(tarea.id, e.target.textContent)}
              >
                {tarea.texto}
              </span>
              ({tarea.categoria})
              <button onClick={() => despachar({ type: 'ELIMINAR_TAREA', payload: tarea.id })}>
                Eliminar
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskManager;
