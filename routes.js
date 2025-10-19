// routes.js
const express = require('express');
const router = express.Router();
let tareas = require('./data');

// ✅ GET - Con este se Listan todas las tareas
router.get('/tareas', (req, res) => {
  res.json(tareas);
});

// ✅ POST - Para crear nueva tarea
router.post('/tareas', (req, res) => {
  const { titulo, descripcion, completada } = req.body;

  // Validación básica
  if (!titulo || typeof completada !== 'boolean') {
    return res.status(400).json({
      error: "Campos inválidos o faltantes: 'titulo' y 'completada' son obligatorios."
    });
  }

  const nuevaTarea = {
    id: tareas.length + 1,
    titulo,
    descripcion: descripcion || "",
    completada
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// ✅ PUT - Actualizar tarea existente
router.put('/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  const { titulo, descripcion, completada } = req.body;

  if (titulo !== undefined) tarea.titulo = titulo;
  if (descripcion !== undefined) tarea.descripcion = descripcion;
  if (completada !== undefined) {
    if (typeof completada !== 'boolean') {
      return res.status(400).json({ error: "'completada' debe ser un valor booleano" });
    }
    tarea.completada = completada;
  }

  res.json(tarea);
});

// ✅ DELETE - Para eliminar tarea
router.delete('/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tareas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  const eliminada = tareas.splice(index, 1);
  res.json({ mensaje: "Tarea eliminada correctamente", eliminada });
});

module.exports = router;