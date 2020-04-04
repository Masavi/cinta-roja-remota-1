/*
  Explicación del bloque de código
*/

// ¿Cómo funcionan Math.random y Math.floor?
// const number = Math.floor((Math.random() * 10));

// console.log(number);
// Math.random genera un valor aleatorio entre 0 y 1
// console.log(Math.random() * 10);

// Math.floor trunca el valor hacia abajo.
// console.log( Math.floor(Math.random() * 10) );

/**
 *  Ejemplo de Promesa 
 */

// const promesaEdad = new Promise((resolve, reject) => {
//   const edad = 99;
//   if (edad >= 18) resolve("simon!")
//   reject("nelson");
// });

// promesaEdad
//   .then(resolucion => console.log(`PROMESA RESUELTA: ${resolucion}`))
//   .catch(rechazo => console.log(`PROMESA RECHAZADA: ${rechazo}`));


/**
 *  Ejemplo de Promesa con Bloque de arriba (numero aleatorio)
 */

// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 10);

//   setTimeout(() => number > 5 
//       ? resolve(number) 
//       : reject(new Error('El numero es menor a 5'))
//   , 1500)
// });

// console.log(promise);
 
// promise
//   .then(number => console.log(number))
//   .catch(error => console.error(error));

/**
 *  CRUD de Peticiones empleando PROMESAS
 */
const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

//  Create - POST
const createPromise = (name, last_name, nacionalidad, biography, gender, age) => {
  const URL = `${URL_BASE}/api/v1/authors/`
  const jsonSend = {
    "name": name,
    "last_name": last_name,
    "nacionalidad": nacionalidad,
    "biography": biography,
    "gender": gender,
    "age": age
  };

  return new Promise((resolve, reject) => {
    request.post(URL, { form: jsonSend }, (err, res, body) => {
      res.statusCode === 201
        ? resolve(JSON.parse(body))
        : reject({ message: 'Error creating author', body: body })
    });
  })
}

// createPromise("Pedro", "Páramo", "ABC", "Anda buscando a su papá en Comala", "M", 34)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//  Read ALL   - GET
const readAuthorsPromise = () => {
  const URL = `${URL_BASE}/api/v1/authors/`
  return new Promise((resolve, reject) => {
    request.get(URL, (err, res, body) => {
      res.statusCode === 200
        ? resolve(JSON.parse(body))
        : reject({ message: 'Error reading authors', body })
    });
  })
}

// readAuthors().then().catch()

//  Read ONE   - GET
const readOneAuthorPromise = (id) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`;
  return new Promise((resolve, reject) => {
    request.get(URL, (err, res, body) => {
      res.statusCode === 200
        ? resolve(JSON.parse(body))
        : reject({ message: 'Error reading author', body })
    });
  })
}

//  Update     - PUT/PATCH
const updateAuthorPromise = (id, name, last_name, nacionalidad, biography, gender, age) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`;
  const jsonSend = {
    "name": name,
    "last_name": last_name,
    "nacionalidad": nacionalidad,
    "biography": biography,
    "gender": gender,
    "age": age
  };

  return new Promise((resolve, reject) => {
    request.put(URL, { form: jsonSend }, (err, res, body) => {
      res.statusCode === 200
        ? resolve(JSON.parse(body))
        : reject({ message: 'Error updating author', body })
    });
  });
}

//  Delete     - DELETE
const deleteAuthorPromise = (id) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`;
  return new Promise((resolve, reject) => {
    request.delete(URL, (err, res, body) => {
      res.statusCode === 204
        ? resolve({ message: 'Author succesfully deleted!' })
        : reject({ message: 'Error deleting author' });
    });
  });
}

/**
 * Finalmente para probar tus nuevas promesas, tienes que hacer los siguientes pasos 
 * encadenando promesas:
    1. Crear un autor
    2. Modificar el autor
    3. Obtener ese autor
    4. Eliminar el autor
 */

 // Primera Forma: Directo pero no lo recomendable...
// createPromise("Juan", "Rulfo", "MX", "Escritor", "M", 74)
//   .then(author => {
//     console.log('Autor creado:', author);
//     updateAuthorPromise(author.id, "Juanito", "Rulfito", "MX", "Gran Escritor", "M", 77)
//       .then(modifiedAuthor => {
//         console.log('Autor modificado:', modifiedAuthor);
//         readOneAuthorPromise(modifiedAuthor.id)
//           .then(readAuthor => {
//             console.log(readAuthor);
//             deleteAuthorPromise(readAuthor.id)
//               .then(response => console.log(response));
//           ;})
//       })
//   })
//   .catch(err => console.log(err));

 // Segunda Forma: Lo recomdable
//  createPromise("Juan", "Rulfo", "MX", "Escritor", "M", 74)
//   .then(author => {
//     console.log('Autor creado:', author);
//     return updateAuthorPromise(author.id, "Juanito", "Rulfito", "MX", "Gran Escritor", "M", 77);
//   })
//   .then(modifiedAuthor => {
//     console.log('Autor modificado:', modifiedAuthor);
//     return readOneAuthorPromise(modifiedAuthor.id);
//   })
//   .then(readAuthor => {
//     console.log('Autor leído:', readAuthor);
//     return deleteAuthorPromise(readAuthor.id);
//   })
//   .then(deleteResponse => console.log(deleteResponse))
//   .catch(err => console.log(err));

 // Tercera Forma: ES6 Async / Await
const authorLifeCycle = async () => {
  try {
    const createdAuthor = await createPromise(
      "Gordolfo", "Gelatino", "MX", "Le gusta comer mucho", "M", 31
    );
    console.log('Autor creado', createdAuthor);
  
    const modifiedAuthor = await updateAuthorPromise(
      createdAuthor.id,"Gordolfinho", "Gelatino", "MX", "Le gusta comer mucho", "M", 31
    );
    console.log('Autor modificado', modifiedAuthor);
  
    const readAuthor = await readOneAuthorPromise(modifiedAuthor.id);
    console.log('Autor leído', readAuthor);
  
    const deleteResponse = await deleteAuthorPromise(readAuthor.id);
    console.log(deleteResponse);
  } catch (error) {
    console.log(error);
  }
}

authorLifeCycle();