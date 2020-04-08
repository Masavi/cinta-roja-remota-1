const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;
require('./database/index.js');
// Middlewares
app.use(express.json()); // Habilitan el req.body
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.get('/', (req, res) => res.json('¡Bienvenido!'));

// CRUD Peliculas
app.post('/api/v1/movies', (req, res) => {
  const { body } = req;
  // 1) Crear un registro de "Pelicula" a partir del body
  // 2) Recibir la respuesta de la creacion, con el ID asignado a la pelicula
  // 3) Responder al cliente con la respuesta de la base de datos;
  const newMovie = "";
  res.status(201).json(newMovie);
});


// Encender el servidor
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
