# 📘 Mi Primera API con Express.js

## 🎯 Descripción del proyecto

Esta API RESTful permite gestionar una **lista de tareas** mediante operaciones CRUD:

* **Crear** nuevas tareas
* **Leer** (listar) tareas existentes
* **Actualizar** tareas
* **Eliminar** tareas

El proyecto está pensado para **entender la estructura básica de un servidor Express**, manejar rutas, métodos HTTP y enviar/recibir datos en formato JSON, sin necesidad de base de datos.

---

## 🛠 Tecnologías utilizadas

* **Node.js** (v22 o superior)
* **Express.js**
* **Postman** (para pruebas de los endpoints)
* **Nodemon** (opcional, para reinicio automático durante desarrollo)

---

## 📂 Estructura de archivos

```
mi-primera-api/
│
├── index.js       → Servidor principal con middleware
├── routes.js      → Definición de rutas CRUD
├── data.js        → Almacenamiento de datos (array de tareas)
├── package.json   → Configuración y dependencias
└── node_modules/  → Dependencias instaladas
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio y entrar a la carpeta:

```bash
git clone <URL_DEL_REPOSITORIO>
cd mi-primera-api
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el servidor:

* Con Node:

```bash
node index.js
```


Servidor corriendo en:

```
http://localhost:3000
```

---

## 🧪 Uso de la API

Se usa **Postman**  para probar los endpoints.


### Ejemplo de petición POST

```json
{
  "titulo": "Practicar Node.js",
  "descripcion": "Ejercicios CRUD",
  "completada": false
}
```

### Ejemplo de respuesta

```json
{
  "id": 3,
  "titulo": "Practicar Node.js",
  "descripcion": "Ejercicios CRUD",
  "completada": false
}
```

---

## ✅ Manejo de errores

* **400** → Campos faltantes o inválidos
* **404** → Ruta o tarea no encontrada
* **200/201** → Operación exitosa

---

## 📸 Evidencias

Se incluyen capturas de pantalla de Postman mostrando:

* GET → Lista de tareas
* POST → Creación de tarea
* PUT → Actualización
* DELETE → Eliminación
