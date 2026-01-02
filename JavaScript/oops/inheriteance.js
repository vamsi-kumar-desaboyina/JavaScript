// class Vehicle
// {
//     name1;
//     constructor(n)
//     {
//         this.name1=n;
//     }
//     print()
//     {
//         return "${name1}";
//     }
// }
// let obj=new Vehicle("vamsi");
// console.log(obj.name1);



class Vehicle {
    name1;
    constructor(n) {
        this.name1 = n;
    }
    print() {
        return `${this.name1}`;
    }
}

class Car extends Vehicle {
    // constructor(n) {
    //     super(n);  // call parent constructor
    // }
    name1="j"
    cprint() {
        return `${this.name1}`;
    }
}

let obj2 = new Car("lalith");
console.log(obj2.name1);       // lalith
console.log(obj2.print());     // lalith
console.log(obj2.cprint());    // lalith

let obj3 = new Car("nanda");
console.log(obj3.name1);       // nanda
console.log(obj3.print());     // nanda
console.log(obj3.cprint());    // nanda
