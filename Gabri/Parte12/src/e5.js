const http = require('http');
const url = require('url');

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
  // Analizar la URL para obtener los parámetros de consulta
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/fizzbuzz') {
    // Obtener el número de la consulta y verificar si es válido
    const number = parseInt(parsedUrl.query.number, 10);
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(number)) {
      let result = '';
      // Generar la secuencia FizzBuzz hasta el número proporcionado
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          result += 'FizzBuzz ';
        } else if (i % 3 === 0) {
          result += 'Fizz ';
        } else if (i % 5 === 0) {
          result += 'Buzz ';
        } else {
          result += `${i} `;
        }
      }
      // Configurar la respuesta con un código de estado 200 y tipo de contenido de texto plano
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      // Enviar la secuencia FizzBuzz como respuesta
      res.end(result.trim());
    } else {
      // En caso de que el número no sea válido, responder con un código de estado 400
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid number');
    }
  } else {
    // Si la ruta no coincide con '/fizzbuzz', responder con un código de estado 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000;
// Escuchar en el puerto 3000
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
