class Animal {
  constructor(name){
    if (!name) throw new Error("Name is required!");
    this.name = name
    this.brain = true;
    this.legs = 0;
  }

  sleep() {
    return `${this.name} is sleeping... zzZ`;
  }
}

const animal_1 = new Animal("Zaboomafoo");
// console.log(animal_1.sleep());

class Human extends Animal {
  /*
    Al heredear (extends)
    1) se reciben todos los métodos del papá
    2) podemos definir qué atributos heredar del papá mediante SUPER
  */
  constructor(name) {
    super(name);
    this.legs = 2;
  }

  sleep() {
    return `${this.name} is sleeping on a bed...`;
  }
}

const human_1 = new Human("Maui");
// console.log(human_1.sleep());

class Pet extends Animal {
    constructor(name) {
      super(name);
      this.legs = 4;
      this.fleas = 0;
    }

    askForFood() {
      return `${this.name} is asking for food!`;
    }
}

const pet_1 = new Pet("Chancla");
// console.log(pet_1.askForFood());
// console.log(pet_1.sleep());

class Dog extends Pet {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
    this.fleas = 8;
  }

  askForFood() {
    return `${this.name} is eating crackers`;
  }
}

class Cat extends Pet {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
    this.fleas = 4;
  }

  askForFood() {
    return `${this.name} is eating tuna`;
  }
}

const dog_1 = new Dog("Abogado", "Husky");
const cat_1 = new Cat("Ingeniero", "Persian");

// console.log(dog_1.breed);
// console.log(dog_1.askForFood());
// console.log(cat_1.breed);
// console.log(cat_1.askForFood());

/*
Ejericico Cinema

  Clase LARGOMETRAJE
    Subclases: PELICULA / DOCUMENTAL

  Clase CINE
    metodo: reproducir(largometraje) {
      return 'Wall-E tiene una duración de 103 minutos';
    }

  El código debe lucir similar a esto:
  Cine.reproducir(pelicula);
  Cine.reproducir(documental);
*/

class Largometraje {
  constructor(titulo, duracion) {
    this.titulo = titulo;
    this.duracion = duracion;
  }
}

class Pelicula extends Largometraje {
  constructor(titulo, duracion, genero) {
    super(titulo, duracion);
    this.genero = genero;
  }
}

class Documental extends Largometraje {
  constructor(titulo, duracion, director) {
    super(titulo, duracion);
    this.director = director;
  }
}

class Cine {
  constructor(nombre) {
    this.nombre = nombre;
  }

  reproducir(largometraje) {
    return `${largometraje.titulo} tiene una duración de ${largometraje.duracion} minutos`;
  }
}

const pelicula = new Pelicula("Titanic", 161, "James Cameron");
const documental = new Documental("Salvando el Ajusco", 119, "Diego Aaron");
const cine = new Cine("Cinemex");

console.log(cine.reproducir(pelicula));
console.log(cine.reproducir(documental));
