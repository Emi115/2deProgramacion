import React from 'react';
import './Css/style.css';

function MyApp() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-react-app" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="stylesheet" href="./Css/style.css" />
          <title>Aplicacion de react</title>
        </head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root"></div>

          {/* Contenido del cuerpo de la página */}
          <h1 id="Texto1">Zudaderas</h1>
          <div className="carrusel">
            {/* Imágenes del carrusel con rutas */}
            <span style={{ '--i': 1 }}>
              <img src="/Fotos/sudaderastarwars.jpg" alt="not found" />
            </span>

            <span style={{ '--i': 2 }}>
              <img src="/Fotos/sudaderaaot.jpg" alt="not found" />
            </span>

            <span style={{ '--i': 3 }}>
              <img src="/Fotos/sudaderaaot2.jpg" alt="not found" />
            </span>

            <span style={{ '--i': 4 }}>
              <img src="/Fotos/sudaderaspider.jpg" alt="not found" />
            </span>

            <span style={{ '--i': 5 }}>
              <img src="/Fotos/sudaderaaotnieves.jpg" alt="not found" />
            </span>

            <span style={{ '--i': 6 }}>
              <img src="/Fotos/sudaderaaotnieves.jpg" alt="not found" />
            </span>

            <span style={{ '--i': 7 }}>
              <img src="/Fotos/sudaderasara.jpg" alt="not found" />
            </span>

            <span style={{ '--i': 8 }}>
              <a href="https://www.google.com" target="_blank">
                <img src="/Fotos/sudaderastarwars2.jpg" alt="not found" />
              </a>
            </span>
          </div>

          <br />
          <div id="prueba">hola</div>

          {/* Botón simple centrado */}
          <button className="boton">Bajar</button>
        </body>
      </html>
    </>
  );
}

export default MyApp;
