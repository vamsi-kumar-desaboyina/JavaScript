console.log(a);
var a = 10;
console.log(a);
// console.log(b); //error
let b = 20;
console.log(b);
// console.log(c); //error
const c = 20;
console.log(c);
f1();
function f1() {
  console.log("vamsi");
}
f1();
console.log(f2); //undefined
//console.log(f2()); //error
var f2 = function () {
  console.log("kumar");
};
f2();
x = 5;
console.log(x);
var x;
