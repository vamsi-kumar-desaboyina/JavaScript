var x = 1;
let y = 2;

function test() {
  var x = 10;
  let y = 20;

  if (true) {
    var x = 100;
    let y = 200;

    console.log(x); // ?
    console.log(y); // ?
  }

  console.log(x); // ?
  console.log(y); // ?
}

test();

console.log(x); // ?
console.log(y); // ?
