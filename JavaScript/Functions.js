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

function sum(a, b) {
  return a + b;
}
const sumresult = sum(10, 20);
console.log("outside", sumresult);
