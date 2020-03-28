const mostrarMensaje = () => console.log("Pasó un segundo!");

// console.log("¡Funciona!");       // SINCRONO
// setTimeout(mostrarMensaje, 0);   // ASYNC
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
