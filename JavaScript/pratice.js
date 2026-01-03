let a = 10;
let b = 20.9;
let c = Infinity;
let d = NaN;
console.log(typeof a, typeof b, typeof c, typeof d);
console.log(a, b, c, d);

console.log(1 / 0, typeof (1 / 0));
console.log(1 / 0, typeof 1 / 0);
console.log(1 / 0, typeof 1 / 2);
console.log(0 / 0, typeof 0 / 0);
console.log("vamsi" / 10, typeof "vamsi" / 10);
console.log("vamsi" / 10, typeof ("vamsi" / 10));
console.log(Infinity, typeof Infinity);
console.log(10.9, typeof 10.9);
console.log(NaN, typeof NaN);
console.log(NaN + 1, typeof NaN + 1);
console.log(NaN + 1, typeof (NaN + 1));
console.log(NaN ** 0);

