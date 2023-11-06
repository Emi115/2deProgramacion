const http = require('http');

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar la respuesta con un código de estado 200 (OK) y tipo de contenido de texto plano
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Enviar "Hello World!" como respuesta al cliente
  res.end('Hello World!\n');
});

const port = 4000;
// Escuchar en el puerto 4000
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
