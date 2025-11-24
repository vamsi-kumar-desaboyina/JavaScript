// function f1(a, ...c) {
//   console.log(a, c);
// }
// f1(1, 2, 3, 4, 4);

// function f1( ...c,a) { //error
//   console.log(a, c);
// }
// f1(1, 2, 3, 4, 4);

// function f1(...a, ...c) { //error
//   console.log(a, c);
// }
// f1(1, 2, 3, 4, 4);
sum = 0;
function f1(...c) {
  console.log(c);
  li = c;
  for (let a of li) {
    sum += a;
  }
}
f1(1, 2, 3, 4, 4);
console.log(sum);
