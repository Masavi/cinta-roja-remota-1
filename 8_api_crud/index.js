const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;

// Middlewares
app.use(express.json()); // Habilitan el req.body
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.get('/', (req, res) => res.json('¡Bienvenido!'));

// Encender el servidor
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
