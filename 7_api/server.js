const request = require('request');
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

/*
1.- Agrega un endpoint '/api/' que responda a 
        una petición de tipo GET con un código de estado 200 
        y el siguiente json: 
                    {'mensaje':'hola mundo'}
*/

app.get('/api/', (req, res) => {
  res.status(200).json({ mensaje: 'Hola Mundo' });
});

/*
    2.- Agrega un endpoint '/api/suma' que responda a una 
        petición de tipo GET con la suma de dos números que 
        reciba mediante las querys num1 y num2. El servidor
        debe responder con un código de estado 200 y un json 
        como el siguiente:
                        {'resultado': 7}
*/

// /api/suma?num1=10&num2=5
app.get('/api/suma', (req, res) => {
  // const num1 = req.query.num1;
  // const num2 = req.query.num2;
  // Desestructuración (Destructuring Es6)
  const { num1, num2 } = req.query;

  const resultado = parseInt(num1) + parseInt(num2);
  return res.status(200).json({ resultado });
});

/*
    3.- Agrega un endpoint '/api/usuario/' que responda a
        una petición de tipo GET con el nombre que sea 
        recibido a través de params. El servidor debe responder
        con un código de estado 200 y un json como este:
                      {'usuario': 'Edwin'}
*/

app.get('/api/usuario/:nombre', (req, res) => {
  return res.status(200).json({ usuario: req.params.nombre });
});

/*
    4.- Agrega un endpoint '/api/swapi' que responda a una
        petición de tipo GET con el personaje solicitado de 
                        https://swapi.co/
        El cliente debe mandar el número de personaje mediante
        params. La respuesta del servidor debe lucir algo así
                    {'personaje': {
                        'name': 'Luke Skywalker',
                        ...,
*/

app.get('/api/swapi/:id', (req, clientResponse) => {
  const { id } = req.params;
  const URL_SWAPI = `https://swapi.co/api/people/${id}/`;
  request.get(URL_SWAPI, (err, swapiResponse, body) => {
    return swapiResponse.statusCode === 200
      ? clientResponse.json(JSON.parse(body))
      : clientResponse.json({ message: 'Character not found...' });
  })
});

app.listen(port, () => console.log(`Servidor escuchando en ${port}`));

