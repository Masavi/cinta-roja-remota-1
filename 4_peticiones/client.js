const request = require('request');

// console.log("Vamos a hacer una peticion!");
// request.get('http://www.google.com', (error, response, body) => {
//   // console.error('error:', error); // Print the error if one occurred
//   // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   // console.log('body:', body); // Print the HTML for the Google homepage.
//   console.log('🚀 Cuerpo de la respuesta', body);
//   console.log('🚀 Código de estado', response.statusCode);
// });
// console.log("Ha terminado la peticion...");

const SWAPI_URL = 'https://swapi.co/api/people/7/';

request.get(SWAPI_URL, (err, res, body) => {
  console.log(res.statusCode);
  // console.log(body);
  const json = JSON.parse(body);
  console.log(`Mi nombre es ${json.name} y nací en el ${json.birth_year}`);
});

