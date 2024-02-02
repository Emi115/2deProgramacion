import React from "react";
import logo from "../resources/descarga.png";
import "./App.css";
import FormularioRegistro from "./FormularioRegistro"; // Importa el componente FormularioRegistro
import Cronometro from "./cronometro.js"; // Importa el componente Cronometro

function App() {
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
      <h1>2 Sprint de React</h1>
      <hr />

      {/* Renderiza el componente FormularioRegistro */}
      <FormularioRegistro />
      <hr />

      {/* Renderiza el componente Cronometro */}
      <Cronometro />
      <hr />
    </div>
  );
}

export default App;
