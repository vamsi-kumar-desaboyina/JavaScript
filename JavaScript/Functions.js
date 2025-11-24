//named function
// function hello() {
//   console.log("Hello");
// }
// hello();

// function hello(name) {
//   //parameter
//   console.log("Hello", name);
// }
// hello("vamsi"); //ar

// function hello(name = "vamsi") {
//   console.log("Hello", name);
// }
// hello();

// function hello(name = "vamsi") {
//   console.log("Hello", name);
//   return name;
// }
// const name = hello();
// console.log("outside", name);

// function sum(a, b) {
//   console.log("helllo");
//   return a + b;
// }
// const sumresult = sum(10);
// console.log("outside", sumresult);

//pure function without any side effects
// var c = 30;
// function sum(a, b) {
//   console.log("helllo");
//   return a + b;
// }
// const sumresult = sum(10, 20);
// console.log("outside", sumresult);

//pure function with any side effects
// var c = 30;
// function sum(a, b) {
//   console.log("helllo");
//   c = a + b;
// }
// sum(10, 20);
// console.log("outside", c);

// function toCelsius(f) {
//   return (5 / 9) * (f - 32);
// }

// let value = toCelsius;
// console.log(value);

x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(x);
