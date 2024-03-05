/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../Css/style.css';

function MyApp() {
  const images = [
    "/Fotos/sudaderastarwars.jpg",
    "/Fotos/sudaderaaot.jpg",
    "/Fotos/sudaderacielo.jpg",
    "/Fotos/sudaderaspider.jpg",
    "/Fotos/sudaderaaot2.jpg",
    "/Fotos/sudaderaaotnieves.jpg",
    "/Fotos/sudaderasara.jpg",
    "/Fotos/oksana1.jpg"
  ];

  return (
    <div className="body">
      <h1 id="Texto1">Zudaderas</h1>
      <div className="carrusel">
        {images.map((image, index) => (
          <span key={index} style={{ '--i': index + 1 }}>
            <img src={image} alt={`Image ${index + 1}`} />
          </span>
        ))}
      </div>
      <button className="boton">Bajar</button>
    </div>
  );
}

export default MyApp;
