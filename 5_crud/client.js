const request = require('request');
/*
  CRUD OPERATIONS:
*/

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

//  Create - POST
const createAuthor = () => {
  const URL = `${URL_BASE}/api/v1/authors/`
  const jsonSend = {
    "name": "Maui",
    "last_name": "Saavedra",
    "nacionalidad": "MX",
    "biography": "Me gusta comer tacos",
    "gender": "M",
    "age": 25
  };
  request.post(URL, { form: jsonSend }, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body));
  });
}

createAuthor();

//  Read   - GET
//  Update - PUT/PATCH
//  Delete - DELETE