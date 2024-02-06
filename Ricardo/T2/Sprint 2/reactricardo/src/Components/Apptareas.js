import React, { Component } from 'react';
import "./Tareas.css"; // Importar el archivo de estilo

class AppTareas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tareas: [],
      nuevaTarea: '',
      filtro: 'todas'
    };
  }

  componentDidMount() {
    const tareasAlmacenadas = localStorage.getItem('tareas');
    try {
      const tareas = JSON.parse(tareasAlmacenadas);
      if (Array.isArray(tareas)) {
        this.setState({ tareas: tareas });
      } else {
        this.setState({ tareas: [] });
      }
    } catch (e) {
      this.setState({ tareas: [] });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('tareas', JSON.stringify(this.state.tareas));
  }

  agregarTarea = () => {
    if (this.state.nuevaTarea.trim() !== '') {
      const nueva = { texto: this.state.nuevaTarea, completada: false };
      this.setState(prevState => ({
        tareas: [...prevState.tareas, nueva],
        nuevaTarea: ''
      }));
    }
  };

  cambiarEstadoTarea = index => {
    const nuevasTareas = this.state.tareas.map((tarea, i) => {
      if (i === index) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    this.setState({ tareas: nuevasTareas });
  };

  eliminarTarea = index => {
    const nuevasTareas = this.state.tareas.filter((_, i) => i !== index);
    this.setState({ tareas: nuevasTareas });
  };

  manejarCambio = event => {
    this.setState({ nuevaTarea: event.target.value });
  };

  aplicarFiltro = filtro => {
    this.setState({ filtro: filtro });
  };

  filtrarTareas = () => {
    const { filtro, tareas } = this.state;
    switch (filtro) {
      case 'completadas':
        return tareas.filter(t => t.completada);
      case 'pendientes':
        return tareas.filter(t => !t.completada);
      default:
        return tareas;
    }
  };

  render() {
    if (!Array.isArray(this.state.tareas)) {
      return <div>Cargando...</div>;
    }

    return (
      <div className="app-tareas">
        <input
          type="text"
          value={this.state.nuevaTarea}
          onChange={this.manejarCambio}
        />
        <button onClick={this.agregarTarea}>Agregar Tarea</button>
        <div>
          <button onClick={() => this.aplicarFiltro('todas')}>Todas</button>
          <button onClick={() => this.aplicarFiltro('completadas')}>Completadas</button>
          <button onClick={() => this.aplicarFiltro('pendientes')}>Pendientes</button>
        </div>
        <ul>
          {this.filtrarTareas().map((tarea, index) => (
            <li key={index}>
              <span
                style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}
                onClick={() => this.cambiarEstadoTarea(index)}
              >
                {tarea.texto}
              </span>
              <button onClick={() => this.eliminarTarea(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AppTareas;
