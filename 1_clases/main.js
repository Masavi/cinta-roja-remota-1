// const objetoLiteral = {
//   nombre: "Maui",
//   apellido: "Saavedra",
//   comer: () => { console.log('comiendo...') }
// }

/*
  La diferencia entre un objeto y un json es que
 un json lleva las propiedas (llaves) entre comillas dobles
*/

// const json = {
//   "nombre": "Maui",
//   "apellido": "Saavedra",
//   "comer": true
// }

/*
  Programción Orienta a Objetos: 
  Clases
*/

// Molde de objetos
class Mascota {
  // Es quien recibe y asigna los atributos
  constructor(nombre, tipo, raza, edad) {
    this.name = nombre;
    this.type = tipo;
    this.breed = raza; 
    this.age = edad; 
  }

  comer(comida) {
    return `${this.name} está comiendo ${comida}`;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    // null / undefined / NaN
    if (!name) {
      throw new Error("¡Debes introducir un nombre!");
    }
    return (this.name = name);
  }
}

const perro = new Mascota(
  "Ayudante",
  "Perro",
  "Galgo",
  7,
);

const gato = new Mascota(
  "Gizmo",
  "Gato",
  "Persa",
  4,
);
