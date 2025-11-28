// var i = document.createElement("img");
// i.setAttribute("src", "images/hardik.jpg");
// i.style.width = "170px";
// i.style.height = "170px";
// i.style.border = "2px solid red";
// i.style.borderRadius = "50%";
// var b = document.querySelector("body");
// b.appendChild(i);

var btn = document.querySelector("button");
btn.addEventListener("click", function () {
  var i = document.createElement("img");
  i.setAttribute("src", "images/hardik.jpg");
  i.style.width = "170px";
  i.style.height = "170px";
  i.style.border = "2px solid red";
  i.style.borderRadius = "50%";
  var b = document.querySelector("body");
  b.appendChild(i);
});
