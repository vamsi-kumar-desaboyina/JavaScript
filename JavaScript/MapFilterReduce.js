//map
// a = [1, 2, 3, 4, 5];
// res = a.map(function (b) {
//   return b * 2;
// });
// console.log(res);

//filter
// a = [1, 2, 3, 4, 5];
// res = a.filter(function (b) {
//   return b > 2;
// });
// console.log(res);

//reduce
// a = [1, 2, 3, 4, 5];
// res = a.reduce(function (b, b1) {
//   return b + b1;
// });
// console.log(res);

a = [1, 2, 3, 4, 5];
res = a.reduce(function (b, b1) {
  return b + b1;
}, 0); //it not mandatory to have 0 we have anything or nothing
console.log(res);
