//primitive datatypes
//number,string,null,undefined,bigInt,boolean,symbol
let a = 10;
let b = 20;
console.log(a);
console.log(typeof a);
console.log(typeof typeof a);
let str = "vamsi";
let str1 = "vamsi";
let str2 = `vamsi`;
console.log(str);
console.log(str1);
console.log(str2);
console.log(typeof str);
let bool = true;
let bool1 = Boolean(1); //typecasting converting one datatype to another dataype
console.log(bool);
console.log(typeof bool);
console.log(bool1);
console.log(typeof bool1);
let bool2 = Boolean(0); //typecasting converting one datatype to another dataype
console.log(bool2);
console.log(typeof bool2);
let bool3 = Boolean(-2); //typecasting converting one datatype to another dataype
console.log(bool3);
console.log(typeof bool3);
let aa = null;
console.log(aa, typeof aa);
let aaa;
console.log(aaa, typeof aaa);
let big = 111111111111111n;
console.log(big, typeof big);
let asymbol = Symbol("vamsi");
let asymbol1 = Symbol("vamsi");
console.log(asymbol);
console.log(asymbol1);
console.log(asymbol1 === asymbol);
console.log(typeof asymbol);
console.log(asymbol.description);
