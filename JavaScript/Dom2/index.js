/** @type {HTMLElement} */

let div = document.querySelector(".main div");
let but = document.querySelector(".main button");
but.addEventListener("click", function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
