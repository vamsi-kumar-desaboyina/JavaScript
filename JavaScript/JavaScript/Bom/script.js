var btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log("hwllo");
  location.href = "https://www.programiz.com/java-programming/online-compiler/";
});

// var btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   location.reload();
//   console.log("hwllo");
// });

var bac = document.querySelector("#backward");
bac.addEventListener("click", function () {
  console.log("back");
  history.back();
});

var forwar = document.querySelector("#forward");
forwar.addEventListener("click", function () {
  console.log("front");
  history.forward();
});

// localStorage.setItem("user", "vamsi");
// localStorage.setItem("address", "tenali");
// localStorage.removeItem("user");
// sessionStorage.setItem("age", 12);
// console.log(localStorage.getItem("address"));
