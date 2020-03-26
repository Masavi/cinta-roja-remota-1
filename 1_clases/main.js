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



/*
  1.- Haz una clase llamada Persona que siga las siguientes condiciones:
    Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
    calcularIMC()
    esMayorDeEdad()
    El constructor pide nombre, edad,sexo,peso y altura
    Generar el RFC a partir de el nombre, edad y sexo
*/
/*
  2.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
    -Titular y cantidad
    -ingresar(cantidad)
    -retirar(cantidad)
    Hacer las validaciones previas
    Como regla de negocio no debe de tener más de $900 y menos de $10
*/

class Cuenta {
  constructor(titular, cantidad) {
    this.titular = titular;
    this.cantidad = cantidad;
  }

  getTitular() {
    return this.titular;
  }

  setTitular(titular) {
    return this.titular = titular;
  }

  getCantidad() {
    return this.cantidad;
  }

  // no debe de tener más de $900
  ingresar(dinero) {
    const cantidadFinal = this.cantidad + dinero;
    if (cantidadFinal > 900) {
      throw new Error("No puedes tener más de $900 en la cuenta");
    }
    return this.cantidad = cantidadFinal;
  }

  // no debe de tener menos de $10
  retirar(dinero) {
    const cantidadFinal = this.cantidad - dinero;
    if (cantidadFinal < 10) {
      throw new Error("No puedes tneer menos de $10 en la cuenta");
    }
    return this.cantidad = cantidadFinal;
  }
}

const cuenta = new Cuenta("Maui", 27.50);