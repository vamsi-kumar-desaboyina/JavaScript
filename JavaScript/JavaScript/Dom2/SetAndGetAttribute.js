// setTimeout(() => {
//   var a = document.querySelector("img");
//   var b = a.getAttribute("src");
//   var c = a.setAttribute("src", "images/rohit.jpg");
// }, 5000);
var a = document.querySelector("#iyer");
var b = document.querySelector("#rohit");
var btn = document.querySelector("button");
var count = 0;
btn.addEventListener("click", function () {
  if (count === 0) {
    // a.getAttribute("src");
    a.setAttribute("src", "images/rohit.jpg");
    // b.getAttribute("src");
    b.setAttribute("src", "images/iyer.jpg");
    count = 1;
  } else {
    a.setAttribute("src", "images/iyer.jpg");
    b.setAttribute("src", "images/rohit.jpg");
    count = 0;
  }
});
