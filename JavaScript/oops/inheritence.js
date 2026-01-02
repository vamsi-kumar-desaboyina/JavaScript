// class Vehicle {
//   constructor(name) {
//     this.name = name;
//   }

//   start() {
//     console.log(`${this.name} is starting...`);
//   }
// }
// class Car extends Vehicle {
//   constructor(name, model) {
//     super(name);   // calls Vehicle constructor
//     this.model = model;
//   }

//   showDetails() {
//     console.log(`${this.name} - Model: ${this.model}`);
//   }
// }
// const c1 = new Car("Toyota", "Fortuner");
// c1.start();        // from Vehicle class
// c1.showDetails();  // from Car class


//single level
// class A {
//   showA() {
//     console.log("Inside A");
//   }
// }

// class B extends A {
//   showB() {
//     console.log("Inside B");
//   }
// }

// const obj = new B();
// obj.showA();  // from A
// obj.showB();  // from B


//multi level
class A {
  displayA() {
    console.log("Class A");
  }
}

class B extends A {
  displayB() {
    console.log("Class B");
  }
}

class C extends B {
  displayC() {
    console.log("Class C");
  }
}

const obj = new C();
obj.displayA();
obj.displayB();
obj.displayC();

const obj1 = new B();
obj1.displayA();
obj1.displayB();
// obj1.displayC(); //error

//Hierarchical Inheritance
// class Vehicle {
//   start() {
//     console.log("Vehicle starting...");
//   }
// }

// class Car extends Vehicle {
//   showCar() {
//     console.log("Car class");
//   }
// }

// class Bike extends Vehicle {
//   showBike() {
//     console.log("Bike class");
//   }
// }

// const c = new Car();
// c.start();
// c.showCar();

// const b = new Bike();
// b.start();
// b.showBike();
