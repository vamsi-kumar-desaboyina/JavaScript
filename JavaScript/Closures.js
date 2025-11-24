//closure can be Hof but hof cannot be a closure
//closure hof the function which is returnig another function and using the data of parent that is called as a closure
function f1() {
  var a = 10;
  return function () {
    console.log(a);
  };
}
f1()();
