// index.js
const express = require("express");
const app = express();
const rutas = require("./routes"); // 👈 asegúrate que el nombre coincida con tu archivo routes.js

app.use(express.json()); // para leer JSON

// Usar las rutas con prefijo /api
app.use("/api", rutas);

// Ruta base de prueba
app.get("/", (req, res) => {
  res.send("✅ Servidor Express funcionando correctamente");
});

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
