//declare an array with your fav cricketers and access the first element in a variable and print it in console.
//declare an array with your fav cricketers and access the third element in a variable and print it in console.
//declare an array with your fav cricketers and replace the second element in a variable and print it in console.
//declare an array with your fav cricketers and add other cricketer in the array using push.
//declare an array with your fav cricketers and remove the last cricketer in the array using pop.

// var cricketers = ["virat", "abd", "gayle", "rohit"];
// var cricketer1 = cricketers[0];
// var cricketer3 = cricketers[2];
// cricketers[1] = "yuvi";
// cricketers.push("abd");
// cricketers[cricketers.length] = "warner";
// console.log(cricketer1);
// console.log(cricketer3);
// console.log(cricketers);
// cricketers.pop();
// console.log(cricketers);

//make a soft copy of that array
// var cricketers = ["virat", "abd", "gayle", "rohit"];
// var cricketers1 = cricketers;
// console.log(cricketers);
// console.log(cricketers1);
// cricketers[1] = "vamsi";
// console.log(cricketers);
// console.log(cricketers1);
// cricketers1[1] = "kumar";
// console.log(cricketers);
// console.log(cricketers1);
//in this cricketers and cricketers1 both are refering th the same address reference.
//thats why if you change in any array it will effect other array as well

//make a hard copy of that array
// var cricketers = ["virat", "abd", "gayle", "rohit"];
// var cricketers1 = [...cricketers]; //spread operator
// console.log(cricketers);
// console.log(cricketers1);
// cricketers[1] = "vamsi";
// console.log(cricketers);
// console.log(cricketers1);
// cricketers1[1] = "kumar";
// console.log(cricketers);
// console.log(cricketers1);

//merage two arrays
// var a = [10, 20, 30];
// var b = [40, 50, 60];
// var c = [...a, ...b];
// console.log(c);
// var d = a.concat(b);
// console.log(d);
// var res = a.includes(20); //returns boolean value
// console.log(res);

//write a for loop that loops through an array and skips
let a = [1, 2, 3, 4, 5];
let b = [];
for (let i = 0; i < a.length; i++) {
  if (a[i] == 3) {
    continue;
  }
  console.log(a[i]);
  b.push(a[i]);
}
console.log(b);
