// controllers/notasController.js
const fs = require('fs');
const path = require('path');

// Ruta a la carpeta donde se almacenan las notas
const notasPath = path.join(__dirname, '..', 'notas');

// Obtener todas las notas (títulos solamente)
const getNotas = (req, res) => {
  try {
    const notas = fs.readdirSync(notasPath);
    res.json(notas);
  } catch (error) {
    res.status(500).send('Error al obtener las notas');
  }
};

// Crear o actualizar una nota
const createOrUpdateNota = (req, res) => {
  const { titulo } = req.params;
  const { contenido } = req.body;
  const notaPath = path.join(notasPath, `${titulo}.html`);

  try {
    fs.writeFileSync(notaPath, contenido);
    res.json({ mensaje: 'Nota creada o actualizada exitosamente' });
  } catch (error) {
    res.status(500).send('Error al crear o actualizar la nota');
  }
};

// Obtener el contenido de una nota por su título
const getNotaById = (req, res) => {
  const { id } = req.params;
  const notaPath = path.join(notasPath, `${id}.html`);

  try {
    const contenido = fs.readFileSync(notaPath, 'utf-8');
    res.send(contenido);
  } catch (error) {
    res.status(404).send('Nota no encontrada');
  }
};

// Eliminar una nota por su título
const deleteNota = (req, res) => {
  const { id } = req.params;
  const notaPath = path.join(notasPath, `${id}.html`);

  try {
    fs.unlinkSync(notaPath);
    res.json({ mensaje: 'Nota eliminada exitosamente' });
  } catch (error) {
    res.status(404).send('Nota no encontrada');
  }
};

module.exports = {
  getNotas,
  createOrUpdateNota,
  getNotaById,
  deleteNota,
};
