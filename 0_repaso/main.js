"use strict";
/*
  1) Entrada
*/

// const textoUsuario = prompt("Introduce texto!");

/*
  2) Salida
*/

// console.log(textoUsuario);

/*
  3) Variable
*/

// Vanilla JS
var numero = 10; // ¡Mala práctica!

// ES6
let mensaje = "hola"; // Buena práctica
const edad = 25; // Una aún mejor buena práctica

/*
  4) Tipos de Datos
*/

// Falsy
const indefinido = undefined;
const nulo = null;
const notaNumber = NaN; // Not a Number

const string = "Este es un texto"; // String
const boolean = true; // Boolean
const number = 10; // Number
// Object
const array = [
  1,        // 0
  "texto",  // 1
  [1,2,3],  // 2
  { nombre: "Maui", apellido: "Saavedra" },  // 3
  function(nombre){return "Hola "+ nombre},  // 4
  6,        // 5 
];
// Object
const object = {
  // llave: valor
  uno: 1,
  dos: ["h","o","l","a"],
  tres: { nombre: [ "Luis", "Mauricio"] },
};

/*
  Function
*/ 

// Vanilla
function sumar(num1, num2) {
  return num1 + num2;
}

// Función Anónima
const restar = function(num1, num2) {
  return num1 - num2;
}

// Función Anónima ES6 
const restarFlecha = (num1, num2) => {
  return num1 - num2;
}

/*
  5) Estructuras de Control
*/

// for(let i=0; i<array.length; i++) {
//   console.log(array[i]);
// }


// Ejemplos de SCOPE (Alcance)
// let otra;

// function name(params) {
//   let miVariable // CamelCases
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// if (condition) {
  
// } else {
  
// }

function esMayorDeEdad(persona) {
  const nombre = persona.nombre;
  const edad = persona.edad;
  // if la persona tiene 18 o es mayor que 18 
    // devuelve "es mayor de edad"
  // if es menor que 18
    // devuelve "estas pollito aun"

  // BOOLEANOS -> TRUE / FALSE
  // TRUE -> 1
  // FALSE -> 0

  if ( typeof edad !== 'number' ) {
    return 'Debes introducir un numero en la edad!'
  };

  // if (edad >= 18) {
  //   // Javascript Vanilla
  //   // return ("¡" + nombre + " es mayor de edad!");
  //   // ES6
  //   return (`¡${nombre} es mayor de edad!`);
  // } else if ( (edad <= 18) ) {
  //   return (`¡${nombre} está bien pollo!`);
  // }

  return edad >= 18
    ? ("¡" + nombre + " es mayor de edad!")
    : (`¡${nombre} está bien pollo!`);
}
