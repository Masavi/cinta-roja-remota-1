const express = require('express');
const app = express();
const port = 4200;

// Endpoint a raíz
app.get('/', (req, res) => res.status(200).send('¡Bienvendio a mi servidor!'));

app.get('/autor', (req, res) => res.send({ message: 'this is a test' }));

// ¿Cómo recibimos un body?

// ¿Cómo trabajamos con querys?

// ¿Cómo trabajamos con params?

app.listen(port, () => console.log(`Servidor escuchando en ${port}`));

