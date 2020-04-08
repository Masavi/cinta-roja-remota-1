const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;
require('./database');
const Movies = require('./models/Movies');

// Middlewares
app.use(express.json()); // Habilitan el req.body
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.get('/', (req, res) => res.json('¡Bienvenido!'));

// CRUD Peliculas

// CREATE
app.post('/api/v1/movies', (req, res) => {
  const { body } = req;
  if (!body.actors || body.actors.length === 0) {
    return res.status(400).json({message: "at least one actor is required"});
  }
  // 1) Crear un registro de "Pelicula" a partir del body
  return Movies.create(body)
    // 2) Recibir la respuesta de la creacion, con el ID asignado a la pelicula
    // 3) Responder al cliente con la respuesta de la base de datos;
    .then(newMovie => res.status(201).json(newMovie))
    .catch(err => {
      console.log('🚫' ,err);
      res.status(400).json(err)
    })
});

// READ All
app.get('/api/v1/movies', (req, res) => {
  // Obtener peliculas de la base de datos
  Movies.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json(err));
});

// READ One
app.get('/api/v1/movies/:id', (req, res) => {
  // Obtener ID desde params
  const { id } = req.params;
  // Obtener pelicula por ID de la base de datos
  Movies.findById(id)
    .then(movie => {
      if (!movie) res.status(404).json('Movie not found');
      res.json(movie)
    })
    .catch(err => res.status(404).json(err));
});

// UPDATE
app.patch('/api/v1/movies/:id', (req, res) => {
  const { body } = req;
  // Obtener ID desde params
  const { id } = req.params;
  // Encontrar y actualizar pelicula por ID a partir del Body que me manda el cliente
  Movies.findByIdAndUpdate(id, body, { new: true })
    .then(updatedMovie => res.json(updatedMovie))
    .catch(err => res.status(404).json(err));
});

// DELETE
app.delete('/api/v1/movies/:id', (req, res) => {
  // Obtener ID desde params
  const { id } = req.params;
  // Encontrar y borrar pelicula por ID
  // Encontrar y actualizar pelicula por ID a partir del Body que me manda el cliente
  Movies.findByIdAndDelete(id)
    .then(() => res.status(204).json())
    .catch(err => res.status(404).json(err));
});


// Encender el servidor
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
