import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Usa path.join para construir la ruta completa al archivo HTML
const filePath = path.join('C:', 'Users', 'Emi', 'Documentos', 'Github', '2deProgramacion', 'Gabri', 'Parte13Nodejsconexpress', 'src', 'index.html');

app.get('/', (req, res) => {
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
