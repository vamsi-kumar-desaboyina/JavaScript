//return a function
//or
//it will take a function as parameter
// function f1() {
//   return function () {
//     console.log("hello");
//   };
// }
// a = f1();
// console.log(a);
// console.log(a());
// console.log(f1()());

// function f1(a) {
//   a();
// }
// f1(function name() {
//   console.log("Hello");
// });

// function f1(a) {
//   a();
// }
// f1(() => {
//   console.log("Hello");
// });

// function f1(a) {
//   a();
// }
// f1(let c=function(){
//   console.log("Hello");
// }); //error
let c = function () {
  console.log("Hello");
};
function f1(a) {
  a();
}
f1(c);
