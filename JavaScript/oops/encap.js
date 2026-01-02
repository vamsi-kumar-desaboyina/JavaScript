// class Account {
//   #balance = 0;   // private variable
  
//   deposit(amount) {
//     this.#balance += amount;
//   }
  
//   getBalance() {
//     return this.#balance;
//   }
// }
// let a = new Account();
// a.deposit(500);
// console.log(a.getBalance());  // 500

// console.log(a.#balance);  // ❌ ERROR (cannot access private)

class Student {
  #marks;

  constructor(name, marks) {
    this.name = name;
    this.#marks = marks;
  }

  getMarks() {
    return this.#marks;
  }

  setMarks(m) {
    if (m < 0) console.log("Invalid marks");
    else this.#marks = m;
  }
}

let s = new Student("Vamsi", 90);
console.log(s.getMarks());  // 90
s.setMarks(95);
console.log(s.getMarks());  // 95
