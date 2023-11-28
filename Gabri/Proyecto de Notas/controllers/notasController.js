// controllers/notasController.js
const fs = require('fs');
const path = require('path');

// Ruta a la carpeta donde se almacenan las notas
const notasPath = path.join(__dirname, '..', 'notas');

// Obtener todas las notas con sus contenidos
const getNotas = (req, res) => {
  try {
    const notas = fs.readdirSync(notasPath).map((nota) => {
      const notaPath = path.join(notasPath, nota);
      const contenido = fs.readFileSync(notaPath, 'utf-8');
      return { titulo: nota, contenido };
    });
    res.json(notas);
  } catch (error) {
    res.status(500).send('Error al obtener las notas');
  }
};

// Crear una nueva nota
const createNota = (req, res) => {
  const { titulo, contenido } = req.body;
  const notaPath = path.join(notasPath, `${titulo}.txt`);

  try {
    fs.writeFileSync(notaPath, contenido);
    res.json({ mensaje: 'Nota creada exitosamente' });
  } catch (error) {
    res.status(500).send('Error al crear la nota');
  }
};

// Obtener el contenido de una nota por su título
const getNotaById = (req, res) => {
  const { id } = req.params;
  const notaPath = path.join(notasPath, `${id}`);

  try {
    const contenido = fs.readFileSync(notaPath, 'utf-8');
    res.json({ titulo: id, contenido });
  } catch (error) {
    res.status(404).send('Nota no encontrada');
  }
};

// Eliminar una nota por su título
const deleteNota = (req, res) => {
  const { id } = req.params;
  const notaPath = path.join(notasPath, `${id}`);

  try {
    fs.unlinkSync(notaPath);
    res.json({ mensaje: 'Nota eliminada exitosamente' });
  } catch (error) {
    res.status(404).send('Nota no encontrada');
  }
};

module.exports = {
  getNotas,
  createNota,
  getNotaById,
  deleteNota,
};
