//closure can be Hof but hof cannot be a closure
//closure hof the function which is returnig another function and using the data of parent that is called as a closure
// function f1() {
//   var a = 10;
//   return function () {
//     console.log(a);
//   };
// }
// f1()();

// function f1(f2) {
//   setTimeout(f2, 5000);
// }
// f1(function () {
//   console.log("hello");
// });

// function f1() {
//   var count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// a = f1();
// a();
// a();
// a();

// function f1() {
//   var count = 0;
//   return function () {
//     if (count < 4) console.log(count);
//     count++;
//   };
// }
// a = f1();
// a();
// a();
// a();
// a();
// a();
// a();

// function f1(b) {
//   var count = 0;
//   return function () {
//     if (count < 4) {
//       b();
//       console.log(count);
//     }
//     count++;
//   };
// }
// a = f1(function () {
//   console.log("hello");
// });
// a();
// a();
// a();
// a();
// a();
// a();

function f1(f2) {
  setInterval(f2, 3000);
}
f1(function () {
  console.log("hello");
});
