import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Actualizado para v6
import logo from "../resources/descarga.png";
import "./App.css";
import Inicio from "./Inicio/Inicio.js";
import PerfilUsuario from "./PerfilUsuario/PerfilUsuario.js";
import FormularioContacto from "./FormularioContacto/FormularioContacto.js"; // Asegúrate de que la ruta de importación sea correcta
import BuscadorPeliculas from "./BuscadorPeliculas/BuscadorPeliculas.js"; // Asegúrate de que la ruta de importación sea correcta

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

      <h1>3 Sprint de React</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuario/:id" element={<PerfilUsuario />} />
          <Route path="/contacto" element={<FormularioContacto />} />
          <Route path="/buscadorPeliculas" element={<BuscadorPeliculas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
