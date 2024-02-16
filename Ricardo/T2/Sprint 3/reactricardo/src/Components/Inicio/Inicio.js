import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css"; // Asegúrate de que la ruta de importación sea correcta
const Inicio = () => {
  return (
    <div>
      <h2>willkommen</h2>
      <nav>
        <Link to="/usuario/1" className="nav-link">
          Perfil del Usuario 1
        </Link>
        <br />
        <Link to="/usuario/2" className="nav-link">
          Perfil del Usuario 2
        </Link>
        <br />
        <Link to="/contacto" className="nav-link">
          Contacto
        </Link>
        <br />
        <Link to="/BuscadorPeliculas" className="nav-link">
          Buscador Peliculas
        </Link>
        <br />
        
      </nav>
    </div>
  );
};

export default Inicio;
