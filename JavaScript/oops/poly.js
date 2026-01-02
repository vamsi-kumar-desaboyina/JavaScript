//Create a class Calculator
// method: sum(a, b)
// if only one value passed → print a
// if two values passed → print a + b
// (use default parameter or rest parameter)
// Then create a class AdvancedCalc extends Calculator
// override method sum(a, b)
// print Sum is: result

// class Calculator
// {
//     sum(a)
//     {
//         console.log(a);
//     }
//     sum(a,b)
//     {
//         console.log(a+b);
//     }
    
// }
// class AdvancedCalc extends Calculator
// {
//     sum(a,b)
//     {
//         console.log(a*b);
//     }
// }
// let obj=new Calculator();
// obj.sum(10,20);
// let obj1=new AdvancedCalc();
// obj1.sum(10,20);


class Shape {
  area() {
    console.log("No area");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();  // call parent constructor (optional here)
    this.width = width;
    this.height = height;
  }

  area() {  // overriding
    console.log(this.width * this.height);
  }
}

let r = new Rectangle(5, 4);
r.area();   // 20
