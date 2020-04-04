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

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(() => number > 5 
      ? resolve(number) 
      : reject(new Error('El numero es menor a 5'))
  , 1500)
});

console.log(promise);
 
promise
  .then(number => console.log(number))
  .catch(error => console.error(error));
