import React, { useState } from "react";
import styles from "./BuscadorPeliculas.module.css";

const BuscadorPeliculas = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const buscarPeliculas = async (e) => {
    e.preventDefault();
    if (!terminoBusqueda) return;

    setCargando(true);
    setError("");
    try {
      const url = `https://www.omdbapi.com/?s=${encodeURIComponent(
        terminoBusqueda
      )}&apikey=4ddd07bc`; // Cambia TU_API_KEY por tu clave de API real
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      if (datos.Response === "True") {
        setResultados(datos.Search);
      } else {
        setError(datos.Error);
      }
    } catch (error) {
      setError("Hubo un problema al buscar las películas.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div>
      <form onSubmit={buscarPeliculas} className={styles.buscadorForm}>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={terminoBusqueda}
          onChange={(e) => setTerminoBusqueda(e.target.value)}
          className={styles.inputBusqueda}
        />
        <button type="submit" className={styles.botonBuscar}>
          Buscar
        </button>
      </form>

      {cargando && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <div className={styles.peliculasContenedor}>
        {resultados.map((pelicula) => (
          <div className={styles.peliculaCarta} key={pelicula.imdbID}>
            <img
              src={pelicula.Poster}
              alt={pelicula.Title}
              className={styles.poster}
            />
            <div className={styles.peliculaInfo}>
              <h3>{pelicula.Title}</h3>
              <p>Año: {pelicula.Year}</p>
              {/* El director se agregaría aquí si realizas una segunda petición para obtenerlo */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuscadorPeliculas;
