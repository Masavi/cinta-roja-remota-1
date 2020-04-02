const request = require('request');
/*
  CRUD OPERATIONS:
*/

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

//  Create - POST
const createAuthor = (name, last_name, nacionalidad, biography, gender, age) => {
  const URL = `${URL_BASE}/api/v1/authors/`
  const jsonSend = {
    "name": name,
    "last_name": last_name,
    "nacionalidad": nacionalidad,
    "biography": biography,
    "gender": gender,
    "age": age
  };
  request.post(URL, { form: jsonSend }, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body));
  });
}

createAuthor("Gabriel", "Garcia", "MX", "Escritor de realismo mágico", "M", 90);

//  Read   - GET
//  Update - PUT/PATCH
//  Delete - DELETE