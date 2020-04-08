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

// CREATE
app.post('/api/v1/movies', (req, res) => {
  const { body } = req;
  // 1) Crear un registro de "Pelicula" a partir del body
  // 2) Recibir la respuesta de la creacion, con el ID asignado a la pelicula
  // 3) Responder al cliente con la respuesta de la base de datos;
  const newMovie = "";
  res.status(201).json(newMovie);
});

// READ All
app.get('/api/v1/movies', (req, res) => {
  // Obtener peliculas de la base de datos
  const movies = "";
  res.status(200).json(movies);
});

// READ One
app.get('/api/v1/movies/:id', (req, res) => {
  // Obtener ID desde params
  const { id } = req.params;
  // Obtener pelicula por ID de la base de datos
  const movie = "";
  res.status(200).json(movie);
});

// UPDATE
app.patch('/api/v1/movies/:id', (req, res) => {
  // Obtener ID desde params
  const { id } = req.params;
  // Encontrar y actualizar pelicula por ID a partir del Body que me manda el cliente
  const updatedMovie = "";
  res.status(200).json(updatedMovie);
});

// DELETE
app.patch('/api/v1/movies/:id', (req, res) => {
  // Obtener ID desde params
  const { id } = req.params;
  // Encontrar y borrar pelicula por ID
  res.status(204).json();
});


// Encender el servidor
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
