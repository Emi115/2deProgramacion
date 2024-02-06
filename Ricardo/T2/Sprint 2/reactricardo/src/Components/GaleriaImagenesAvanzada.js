import React, { Component } from "react";
import axios from "axios";
import Modal from "./Modal";
import styles from "./GaleriaEstilos.module.css"; // Importa el archivo CSS aquí

class GaleriaImagenesAvanzada extends Component {
  state = {
    imagenes: [],
    imagenSeleccionada: null,
    paginaActual: 1,
    terminosBusqueda: "",
  };

  componentDidMount() {
    this.cargarImagenes();
  }

  cargarImagenes = () => {
    const { paginaActual, terminosBusqueda } = this.state;
    // Reemplaza 'TU_API_KEY' con tu API key de Unsplash
    const url = `https://api.unsplash.com/search/photos?page=${paginaActual}&query=${terminosBusqueda}&client_id=fI4U7ot5ppKPme6HIAGXD--wFOqlwENe-HP-oeFv_QY`;
    axios
      .get(url)
      .then((response) => {
        this.setState({ imagenes: response.data.results });
      })
      .catch((error) => {
        console.error("Error al cargar imágenes", error);
      });
  };

  handleSearchChange = (e) => {
    this.setState({ terminosBusqueda: e.target.value });
  };

  handleSubmitSearch = (e) => {
    e.preventDefault();
    this.setState({ paginaActual: 1 }, this.cargarImagenes);
  };

  handleImageClick = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  };

  cerrarModal = () => {
    this.setState({ imagenSeleccionada: null });
  };

  cambiarPagina = (incremento) => {
    this.setState(
      (prevState) => ({ paginaActual: prevState.paginaActual + incremento }),
      this.cargarImagenes
    );
  };

  abrirModalConImagen = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  };

  irImagenAnterior = () => {
    const index = this.state.imagenes.findIndex(
      (img) => img.id === this.state.imagenSeleccionada.id
    );
    if (index > 0) {
      this.setState({ imagenSeleccionada: this.state.imagenes[index - 1] });
    }
  };

  irImagenSiguiente = () => {
    const index = this.state.imagenes.findIndex(
      (img) => img.id === this.state.imagenSeleccionada.id
    );
    if (index < this.state.imagenes.length - 1) {
      this.setState({ imagenSeleccionada: this.state.imagenes[index + 1] });
    }
  };

  render() {
    const { imagenes, imagenSeleccionada } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmitSearch}>
          <input
            type="text"
            onChange={this.handleSearchChange}
            placeholder="Buscar imágenes..."
          />
          <button type="submit">Buscar</button>
        </form>
        <div className={styles.grid}>
          {" "}
          {/* Aplica la clase grid aquí */}
          {imagenes.map((imagen) => (
            <img
              key={imagen.id}
              src={imagen.urls.small}
              alt={imagen.description}
              className={styles.imgItem}
              onClick={() => this.handleImageClick(imagen)}
            /> // Aplica la clase img-item aquí
          ))}
        </div>
        {imagenSeleccionada && (
          <Modal
            imagen={imagenSeleccionada}
            cerrarModal={this.cerrarModal}
            irImagenAnterior={this.irImagenAnterior}
            irImagenSiguiente={this.irImagenSiguiente}
          />
        )}
        <button
          onClick={() => this.cambiarPagina(-1)}
          disabled={this.state.paginaActual === 1}
        >
          Anterior
        </button>
        <button onClick={() => this.cambiarPagina(1)}>Siguiente</button>
      </div>
    );
  }
}

export default GaleriaImagenesAvanzada;
