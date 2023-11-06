const http = require('http');

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
  if (req.url === '/page') {
    // Si la ruta es '/page', responder con un código de estado 200 y un mensaje HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('This is a page.');
  } else if (req.url === '/error') {
    // Si la ruta es '/error', responder con un código de estado 404 y un mensaje de error
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('404 - Page not found.');
  } else {
    // eslint-disable-next-line max-len
    // En caso de que la ruta no coincida con ninguna ruta definida, responder con un mensaje predeterminado
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }
});

const port = 3000;
// Escuchar en el puerto 3000
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
