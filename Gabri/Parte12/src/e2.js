const http = require('http');
const fs = require('fs');

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
  const filePath = '/src/index.html'; // Nombre del archivo HTML
  // Leer el contenido del archivo HTML
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // En caso de error, responder con un código de estado 500 (Error interno del servidor)
      res.writeHead(500);
      res.end('Internal Server Error');
    } else {
      // Configurar la respuesta con un código de estado 200 (OK) y tipo de contenido HTML
      res.writeHead(200, { 'Content-Type': 'text/html' });
      // Enviar el contenido del archivo HTML como respuesta al cliente
      res.end(data);
    }
  });
});

const port = 3000;
// Escuchar en el puerto 3000
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
