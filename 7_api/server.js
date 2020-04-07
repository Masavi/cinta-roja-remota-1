const express = require('express');
const app = express();
const port = 4200;

// Middlewares
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Endpoints
app.get('/', (req, res) => res.status(200).send('¡Bienvendio a mi servidor!'));

app.get('/autor', (req, res) => res.send({ message: 'this is a test' }));

// ¿Cómo trabajamos con querys?
app.get('/ejemplo', (req, res) => {
  console.log('✅', req.query);
  // localhost:4200/ejemplo?price=5000-12000&marca=Toshiba&fecha=2020-04-06
  return res.send(req.query);
});

// ¿Cómo trabajamos con params?
app.put('/authors/:name/:age', (req, res) => {
  console.log(req.params);
  return res.status(200).send(req.params);
});

// ¿Cómo recibimos un body?
app.post('/profile', (req, res) => {
  console.log(req.body);
  // Aquí iríamos a la base de datos para
  // intentar crear un elemento con lo que contiene req.body
  const respuesta = { id: 57, ...req.body };
  res.status(201).json(respuesta);
});

app.listen(port, () => console.log(`Servidor escuchando en ${port}`));

