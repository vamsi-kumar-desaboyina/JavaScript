// var a = ["vamsi", "kumar", "lalith", "nanda"];
// var hed = document.querySelector("h1");
// var bu = document.querySelector("button");
// bu.addEventListener("click", function () {
//   var le = Math.floor(Math.random() * a.length);
//   console.log(a[le]);
//   hed.innerHTML = `Hello ${a[le]}`;
// });

var a = [
  {
    team: "rcb",
    pc: "red",
    sc: "black",
  },
  {
    team: "srh",
    pc: "orange",
    sc: "black",
  },
  {
    team: "mi",
    pc: "blue",
    sc: "white",
  },
  {
    team: "dc",
    pc: "red",
    sc: "blue",
  },
  {
    team: "csk",
    pc: "yellow",
    sc: "black",
  },
  {
    team: "lsg",
    pc: "blue",
    sc: "grey",
  },
];
var hed = document.querySelector("h1");
var bu = document.querySelector("button");
bu.addEventListener("click", function () {
  var le = Math.floor(Math.random() * a.length);
  console.log(a[le].team);
  hed.innerHTML = `${a[le].team}`;
  hed.style.color = `${a[le].pc}`;
  hed.style.backgroundColor = `${a[le].sc}`;
});
