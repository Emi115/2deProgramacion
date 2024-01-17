import http from 'http';
// console.log(http);

const server = http.createServer((request, response) => {
  response.end('Ismael pesao');
  console.log('Servidor creado');
});
server.listen(3000, () => {
  console.log('Servidor listo para peticiones');
});

const illo = 'Sergio warro';
console.log(illo);
