const http = require('http');
const url = require('url');

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
  // Analizar la URL para obtener los parámetros de consulta
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/hello') {
    // Verificar si se proporciona un parámetro 'name' en la consulta, de lo contrario, usar 'World'
    const name = parsedUrl.query.name || 'World';
    // Configurar la respuesta con un código de estado 200 y tipo de contenido de texto plano
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Enviar un saludo personalizado con el nombre proporcionado
    res.end(`Hello ${name}!`);
  } else {
    // Si la ruta no coincide con '/hello', responder con un código de estado 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000;
// Escuchar en el puerto 3000
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
