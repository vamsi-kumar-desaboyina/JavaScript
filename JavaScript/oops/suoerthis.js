class User {
  constructor(name) {
    this.name = name;    // this.name means "name of this object"
  }

  show() {
    console.log(this.name);  // refers to the same object's name
  }
}

let u1 = new User("Vamsi");
let u2 = new User("Kumar");

u1.show();  // Vamsi
u2.show();  // Kumar

class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);        // calling Parent constructor
    this.age = age;
  }
}

let c = new Child("Vamsi", 23);
console.log(c.name, c.age);

class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    super.sound();       // calling parent method
    console.log("Dog barks");
  }
}

let d = new Dog();
d.sound();
