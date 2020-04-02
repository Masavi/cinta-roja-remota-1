const request = require('request');
/*
  CRUD OPERATIONS:
*/

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

//  Create - POST
const create = (name, last_name, nacionalidad, biography, gender, age) => {
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

// createAuthor("Gabriel", "Garcia", "MX", "Escritor de realismo mágico", "M", 90);

//  Read ALL   - GET
const readAuthors = () => {
  const URL = `${URL_BASE}/api/v1/authors/`
  request.get(URL, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body));
  });
}

// readAuthors();

//  Read ONE   - GET
const readOneAuthor = (id) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`;
  request.get(URL, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body));
  });
}

// readOneAuthor(4000);

//  Update     - PUT/PATCH
const updateAuthor = (id, name, last_name, nacionalidad, biography, gender, age) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`
  const jsonSend = {
    "name": name,
    "last_name": last_name,
    "nacionalidad": nacionalidad,
    "biography": biography,
    "gender": gender,
    "age": age
  };
  request.put(URL, { form: jsonSend }, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body));
  });
}

// updateAuthor(3333, "Yo merengues", "Pacheco", "USA", "Aclamado mexicano que nacio en USA", "M", 10);

//  Delete     - DELETE
const deleteAuthor = (id) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`;
  request.delete(URL, (err, res, body) => {
    console.log(res.statusCode);
    // console.log(JSON.parse(body)); No tiene sentido parsear una respuesta vacía...
    if (res.statusCode === 204) console.log('Eliminado correctamente!');
  });
}

/*
  Al final del ejercicio, debes ejecutar las siguientes 
  funciones para probar que todo esta implementado correctamente:

  1 Crear un usuario
  2 Modificar ese usuario
  3 Obtener usuario
  4 Borrar.
*/

const delAuthor = (id) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`;
  request.delete(URL, (err, res, body) => {
    console.log(res.statusCode);
    // console.log(JSON.parse(body)); No tiene sentido parsear una respuesta vacía...
    if (res.statusCode === 204) console.log('Eliminado correctamente!');
  });
}

const readAuthor = (id) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`;
  request.get(URL, (err, res, body) => {
    console.log(res.statusCode);
    const response = JSON.parse(body);
    console.log(JSON.parse(body));
    if (res.statusCode === 200) {
      delAuthor(response.id);
    }
  });
}

const modifyAuthor = (id, name, last_name, nacionalidad, biography, gender, age) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`
  const jsonSend = {
    "name": name,
    "last_name": last_name,
    "nacionalidad": nacionalidad,
    "biography": biography,
    "gender": gender,
    "age": age
  };
  request.put(URL, { form: jsonSend }, (err, res, body) => {
    console.log(res.statusCode);
    const response = JSON.parse(body);
    console.log(JSON.parse(body));
    if (res.statusCode === 200) {
      readAuthor(response.id);
    }
  });
}

const crearAuthor = (name, last_name, nacionalidad, biography, gender, age) => {
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
    const response = JSON.parse(body);
    if (res.statusCode === 201) {
      modifyAuthor(response.id, "Mau", "Villarreal", "MX", "Jojojo", "M", 25);
    }
  });
}

// crearAuthor("Fulanito", "Perez", "USA", "Este compa es muy feliz", "M", 61);