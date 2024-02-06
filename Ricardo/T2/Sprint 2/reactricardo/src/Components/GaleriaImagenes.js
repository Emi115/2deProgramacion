import React, { Component } from 'react';
import "./GaleriaImagenes.css"; // Importar el archivo de estilo

class GaleriaImagenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenes: [],
      imagenSeleccionada: null
    };
  }

  componentDidMount() {
    // Generar un número de página aleatorio entre 1 y 100 por ejemplo.
    const paginaAleatoria = Math.floor(Math.random() * 100) + 1;

    fetch(`https://picsum.photos/v2/list?page=${paginaAleatoria}&limit=10`)
      .then(response => response.json())
      .then(data => {
        const imagenesConUrl = data.map(img => ({
          ...img,
          url: `https://picsum.photos/id/${img.id}/300/300` // Construir URL para imágenes más grandes
        }));
        this.setState({ imagenes: imagenesConUrl });
      })
      .catch(error => console.error(error));
  }

  seleccionarImagen = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  }

  cerrarModal = () => {
    this.setState({ imagenSeleccionada: null });
  }

  renderModal() {
    const { imagenSeleccionada } = this.state;
    if (!imagenSeleccionada) return null;
  
    return (
      <div className="modal" style={{ display: 'block' }} onClick={this.cerrarModal}>
        <span className="close">&times;</span>
        <img className="modal-content" src={imagenSeleccionada.download_url} alt={imagenSeleccionada.author} />
      </div>
    );
  }
  

  render() {
    const { imagenes } = this.state;
    return (
      <div>
        <div className="grid">
          {imagenes.map(imagen => (
            <img
              key={imagen.id}
              src={imagen.url}
              alt={imagen.author}
              onClick={() => this.seleccionarImagen(imagen)}
              className="grid-item"
            />
          ))}
        </div>
        {this.renderModal()}
      </div>
    );
  }
}

export default GaleriaImagenes;
