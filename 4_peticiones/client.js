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

// const SWAPI_URL = 'https://swapi.co/api/people/7/';

// request.get(SWAPI_URL, (err, res, body) => {
//   console.log(res.statusCode);
//   // console.log(body);
//   const json = JSON.parse(body);
//   console.log(`Mi nombre es ${json.name} y nací en el ${json.birth_year}`);[]
// });

// const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/3/';
// ENDPOINTS

// request.get(POKEAPI_URL, (err, res, body) => {
//   if (res.statusCode === 200) {
//     const json = JSON.parse(body);
//     console.log(`${json.name} has the next abilities:`);
//     json.abilities.forEach(elemento => {
//       console.log(elemento.ability.name);
//     })
//   } else {
//     console.log(res.statusCode);
//   }
// });

/*
  2.- Hacer una funcion que haga una petición 
      (Ejemplo: peticionLibro(“i robot”);
      Buscar un libro y traer el o los autores del primer libro
      http://openlibrary.org/search.json?q=i+robot) 
*/

// const OPEN_LIBRARY_URL = 'http://openlibrary.org/search.json?q=i+robot';

// const peticionLibro = () => {

//   request.get(OPEN_LIBRARY_URL, (err, res, body) => {
//     if (res.statusCode === 200) {
//       const json = JSON.parse(body);
//       console.log(json.docs[0]);
//     } else {
//       console.log(res.statusCode);
//     }
//   });
// }

// peticionLibro();


/*
  5.- Hacer una petición a la swapi a un personaje 
  y obtener sus películas.
                    https://swapi.co/
*/
// const SWAPI_URL = 'https://swapi.co/api/people/13/'
// request.get(SWAPI_URL, (err, res, body) => {
//   const json = JSON.parse(body);
//   console.log(`${json.name} aparece en:`);
//   // console.log(json.films[0]);
//   // const urlFilm = json.films[0];
//   json.films.forEach((urlFilm) => {
//     request.get(urlFilm, (err, res, body) => {
//       const jsonFilm = JSON.parse(body);
//       console.log(jsonFilm.title);
//     });
//   });
// });

/*
  6.- Devolver los asteroides que sean potencialmente peligrosos
    para la tierra de la semana pasada hasta el día de ayer.
                    https://api.nasa.gov/
*/
// const START_DATE = "2020-03-01";
// const END_DATE = "2020-03-08";
// const API_KEY = "tyStyrJUPGtyGmwDHAUV0j96zoK6DYFpIqyWBdKY";
// const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`;

// request.get(URL, (err, res, body) => {
//   if (res.statusCode === 200) {
//     const json = JSON.parse(body);
//     // console.log(json.near_earth_objects.2020-03-02);
//     console.log(json.near_earth_objects['2020-03-02']);
//   }
// });

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

request.get(POKEAPI_URL, (err, res, body) => {
    const respuesta = JSON.parse(body).results;
    // Prueba el código con i<=2 
    for(let i=0; i<=30; i++){
        request.get(respuesta[i].url, (err, res, body) => {
            
            const respuesta = JSON.parse(body);
            
            let pokemon = {
                nombre: respuesta.name,
                movimientos: respuesta.moves,
                tipos: respuesta.types,
                altura: respuesta.height,
                peso: respuesta.weight
            }
            console.log(pokemon);
        });
    }
});