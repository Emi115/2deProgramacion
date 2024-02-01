import React from "react";
import logo from "../resources/descarga.png";
import "./App.css";

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
      <h1>Mi Aplicación React</h1>
      <hr />
    </div>
  );
}

export default App;
