/** @type {HTMLElement} */
// var a = document.querySelector("h1");
// console.log(a);
// a.innerHTML = "vamsi";
// console.log(a);
// document.querySelector("h1").innerHTML = "desaboyina";
// document.querySelector("h1").style.color = "red";
// a.addEventListener("click", function () {
//   document.querySelector("h1").innerHTML = "desa";
//   document.querySelector("h1").style.color = "blue";
// });

var buttona = document.querySelector(".btn");
var divc = document.querySelector("#one");
buttona.addEventListener("click", function () {
  divc.style.color = "blue";
  divc.style.backgroundColor = "white";
  buttona.style.color = "black";
});
