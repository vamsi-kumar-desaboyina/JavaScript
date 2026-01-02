class Animal {
  constructor() {
    if (new.target === Animal) {
      throw new Error("Cannot create object of abstract class");
    }
  }

  sound() {
    throw new Error("sound() must be implemented");
  }
}
class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

let d = new Dog();
d.sound();    // Dog barks
