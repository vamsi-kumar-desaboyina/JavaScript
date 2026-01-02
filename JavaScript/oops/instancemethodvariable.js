class Person {
  constructor(name) {
    this.name = name;   // instance variable
  }

  sayHello() {          // instance method
    console.log("Hello " + this.name);
  }
}

let p1 = new Person("Vamsi");
p1.sayHello();          // Hello Vamsi
