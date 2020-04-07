const express = require('express');
const app = express();
const port = 4200;

// Endpoint a raíz
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

app.listen(port, () => console.log(`Servidor escuchando en ${port}`));

