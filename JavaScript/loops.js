//sum of numners from 1 to 10
// var a = 1;
// var sum = 0;
// while (a <= 10) {
//   sum += a;
//   a++;
// }
// console.log(sum);

//store 5 to 1 numbers in any array
// var array = [];
// var num = 5;
// while (num > 0) {
//   array.push(num);
//   num--;
// }
// console.log(array);

//sum of numners from 1 to 10
// var a = 1;
// var sum = 0;
// do {
//   sum += a;
//   a++;
// } while (a <= 10);
// console.log(sum);

//take an array mult each element by 2 and store the values in the new array
// var array = [1, 2, 3, 4, 5];
// var array1 = [];
// for (var i = 0; i < array.length; i++) {
//   array1[i] = array[i] * 2;
// }
// console.log(array);
// console.log(array1);
// for (var i = 0; i <= array.length; i++) {
//   array1[i] = array[i] * 2;
// }
// console.log(array1);

//display all the element in tne array to another array using loops
// var array = [1, 2, 3, 4, 5];
// var array1 = [];
// for (var i = 0; i < array.length; i++) {
//   array1.push(array[i]); //array1[i] = array[i];
// }
// console.log(array1);

//print until u find the element 4 in the array
var array = [1, 2, 3, 4, 5];
for (var i = 0; i < array.length; i++) {
  if (array[i] === 4) {
    break;
  }
  console.log(array[i]);
}
