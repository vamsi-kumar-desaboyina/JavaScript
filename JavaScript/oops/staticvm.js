class Person {
  static count = 0;     // static variable

  constructor(name) {
    this.name = name;
    Person.count++;     // update shared count
  }

  static showCount() {   // static method
    console.log("Total persons = " + Person.count);
  }
}

let p1 = new Person("Vamsi");
let p2 = new Person("Kumar");

Person.showCount();   
// p1.showCount();       // ❌ NOT allowed
