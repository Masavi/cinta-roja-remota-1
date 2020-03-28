const mostrarMensaje = () => console.log("Pasó un segundo!");

// console.log("¡Funciona!");       // SINCRONO
// FUNCION DE ORDEN SUPERIOR
// setTimeout(                         // ASYNC
//   mostrarMensaje,                // CALLBACK
//   0
// );      
// console.log(3);                  // SINCRONO
// console.log(4);                  // SINCRONO

// JS Vanilla
function sumarVanilla(a, b) {
  console.log("Vamos a sumar dos numeros!");
  return a+b;
}

// ES6
const sumar = (a, b) => {
  console.log("Vamos a sumar dos numeros!");
  return a+b
};

const esPar = (numero) => {
  if (numero%2 === 0) return true
  else return false
}

const esParLaSumaDeDosNumeros = (numero1, numero2) => {
  const resultado1 = sumar(numero1, numero2);
  const resultado2 = esPar(resultado1);
  return resultado2;
}

// const esPar2 = esPar(2);
// const esPar3 = esPar(4);
// if (esPar2 && esPar3) console.log("Los dos numeros son pares!")

// console.log(esParLaSumaDeDosNumeros(5, 7));
// Element.addEventListener("click", callback)

/*
1.- Muestra un mensaje en consola mediante un callback. 
  La función de orden superior que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.
*/

// const mensajeEnConsola = (callback, mensaje) => {
//   callback(mensaje);
// }

// mensajeEnConsola(console.info, "Hola");

/*
2.- Crear una función de orden superior que reciba como
    argumento una variable de cualquier tipo y un callback. La función de orden superior debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido.
*/

const higherOrder = (variable, callback) => {
  callback(variable);
}

const obtenerTipoDeDato = (variable) => typeof(variable);

const callbackContenido = (variable) => {
  console.log(obtenerTipoDeDato(variable));
  console.log(variable);
}

const miVariable = { nombre: "Maui" };
higherOrder(miVariable, callbackContenido);

/*
3.- Crear una función de orden superior que reciba como 
    argumentos dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los
    dos números, la resta de los dos números o la
    multiplicación de los dos números.

4.- Escribe una función de orden superior que reciba una cadena de
    caracteres y debe devolver, mediante un callback, la
    cadena de caracteres en mayúsculas o en minúsculas.
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELARTO

5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
    EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
    mayores a dos horas (hacer la comparación en horas) 
    mediante un callback.
*/