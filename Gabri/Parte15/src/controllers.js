/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
// index.js
import 'esm';

import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware para /header
app.get('/header/:token?', (req, res) => {
  const { token } = req.params;
  if (!token) {
    const error = {
      code: 401,
      error: 'Unauthorized',
      message: 'Error: Set a token to login',
    };
    console.log(error);
    res.status(401).json(error);
  } else {
    console.log(token);
    res.send(`Token: ${token}`);
  }
});

// Middleware para /params
app.get('/params/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hola ${name}`);
});

// Middleware para /query
function sumaN(n) {
  if (n === null) {
    n = 100;
  }
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}

app.get('/query/:n?', (req, res) => {
  const { n } = req.params;
  res.send(`${sumaN(n)}`);
});

// Middleware para /body
app.post('/body', (req, res) => {
  const objeto = req.body;
  console.log(objeto);

  // Convertir el objeto a una lista HTML
  const listItems = Object.entries(objeto).map(([key, value]) => `<li>${key}: ${value}</li>`);
  const htmlList = `<ul>${listItems.join('')}</ul>`;

  res.send(`Este es nuestro objeto: ${htmlList}`);
});

// Enrutador para /animals
const animalsRouter = express.Router();

animalsRouter.get('/dog', (req, res) => {
  res.send({ grow: 'guau guau' });
});

animalsRouter.get('/cat', (req, res) => {
  res.send({ grow: 'miau' });
});

animalsRouter.get('/bird', (req, res) => {
  res.send({ grow: 'pio pio' });
});

// Middleware para el resto de rutas
app.use('/animals', animalsRouter);

// Middleware para rutas no encontradas
app.use('/*', (req, res) => {
  const error = {
    code: 404,
    error: 'Not Found',
    message: 'Error: Path not found',
  };
  console.log(error);

  // Construir la ruta de la imagen correctamente
  const imagePath = path.join(process.cwd(), 'src', '404error.jpg');

  // Enviar la imagen en respuestas 404
  res.status(404).sendFile(imagePath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
