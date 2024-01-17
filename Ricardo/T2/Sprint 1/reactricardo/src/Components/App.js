import React from 'react';
import logo from '../resources/descarga.png';
import './App.css';
import HolaMundo from './HolaMundo.js';
import Saludo from './Saludo';
import ListaDeFrutas from './listaFruta.js'; 
import Contador from './contadorClicks.js';
import ToDoApp from './Tareas.js';
import TaskManager from './TareasComplejas.js';

function App() {
  // Array de frutas con URLs de imagen
  const frutas = [
    { nombre: 'Manzana', urlImagen: 'https://comedelahuerta.com/wp-content/uploads/2019/09/MANZANA-ROYAL-GALA-ECOLOGICO-COMEDELAHUERTA-1.jpg' },
    { nombre: 'Banana', urlImagen: 'https://www.frutiban.com/wp-content/uploads/2017/12/banana.jpg' },
    { nombre: 'Naranja', urlImagen: 'https://i0.wp.com/historiasdelahistoria.com/wordpress-2.3.1-ES-0.1-FULL/wp-content/uploads/2015/11/naranja.jpg?ssl=1' },
    { nombre: 'Piña', urlImagen: 'https://huertatropical.com/wp-content/uploads/2020/02/comprar-pina-online.jpg' },
    // Puedes añadir más frutas aquí
  ];

  return (
    <div className="App">
      {/* Cabecera con logo y enlace */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Título de la aplicación */}
      <h1>Mi Aplicación React</h1>

      {/* Componente HolaMundo */}
      <HolaMundo/>
      <hr/>

      {/* Componente Saludo con diferentes nombres */}
      <Saludo nombre="Ricardo" />
      <Saludo nombre="Oksana" />
      <Saludo nombre="Manuel Pacheco" />
      <Saludo nombre="Juan Tornay" />
      <hr/>

      {/* Componente ListaDeFrutas con array de frutas */}
      <ListaDeFrutas frutas={frutas} />
      <hr/>

      {/* Componente Contador */}
      <Contador />
      <hr/>

      {/* Componente ToDoApp */}
      <ToDoApp />
      <hr/>

      {/* Componente TaskManager */}
      <TaskManager />
    </div>
  );
}

export default App;
