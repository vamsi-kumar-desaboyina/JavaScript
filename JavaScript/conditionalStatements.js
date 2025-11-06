console.log("Conditional Statements");
let age = 20;

if (age >= 18) {
  console.log("You can vote!");
}

console.log("==============");
let temperature = 10;

if (temperature > 20) {
  console.log("It's warm outside!");
} else {
  console.log("It's cold outside!");
}
console.log("==============");
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

console.log("==============");
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Tuesday":
    console.log("Keep going!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Just another day!");
}

console.log("==============");
let number = 7;
let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);

console.log("==============");
let age1 = 20;
let hasID = true;

if (age1 >= 18) {
  if (hasID) {
    console.log("Allowed to enter.");
  } else {
    console.log("Need ID proof.");
  }
} else {
  console.log("Not allowed to enter.");
}

console.log("==============");
//expression for case
let marks1 = 85;

switch (true) {
  case marks1 >= 90:
    console.log("Grade A");
    break;
  case marks1 >= 75:
    console.log("Grade B");
    break;
  case marks1 >= 50:
    console.log("Grade C");
    break;
  default:
    console.log("Fail");
}

console.log("==============");
let x = "5";

switch (x) {
  case 5:
    console.log("Number 5");
    break;
  case "5":
    console.log("String 5");
    break;
}
// because "5" === 5 is false, but "5" === "5" is true
console.log("==============");
let isLoggedIn = true;
switch (isLoggedIn) {
  case true:
    console.log("Dashboard loaded");
    break;
  case false:
    console.log("Please log in");
    break;
}

console.log("==============");
let big = 10n;
switch (big) {
  case 10n:
    console.log("Big number!");
    break;
}

console.log("==============");
let value = null;

switch (value) {
  case null:
    console.log("It's null");
    break;
  case undefined:
    console.log("It's undefined");
    break;
}

console.log("==============");
let obj = { a: 1 };
switch (obj) {
  case { a: 1 }:
    console.log("Matched!");
    break;
  default:
    console.log("No match!");
}
let sameRef = obj;

switch (obj) {
  case sameRef:
    console.log("Matched!");
    break;
}
console.log("==============");
const sym1 = Symbol("id");
const sym2 = Symbol("id");

switch (sym1) {
  case sym1:
    console.log("Same symbol");
    break;
  case sym2:
    console.log("Different symbol");
    break;
}
console.log("=========");
let num = 10.4;

switch (num) {
  case 10.4:
    console.log("Matched");
    break;
  default:
    console.log("Not matched");
}
console.log("==============");
let value1;

switch (value1) {
  case null:
    console.log("It's null");
    break;
  case undefined:
    console.log("It's undefined");
    break;
}
