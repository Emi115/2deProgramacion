// src/App.js
import React from 'react';
import logo from '../resources/descarga.png';
import './App.css';
import HolaMundo from './HolaMundo.js';
import Saludo from './Saludo';
function App() {
  return (
    <div className="App">
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

      <h1>Mi Aplicación React</h1>
      <HolaMundo/>
      <Saludo nombre="Juan" />
      <Saludo nombre="María" />
      {/* Agrega más instancias de Saludo con diferentes nombres según sea necesario */}
    </div>
  );
}

export default App;
