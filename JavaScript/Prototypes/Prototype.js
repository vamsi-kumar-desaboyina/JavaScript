// let a={
//     b:33
// }
// let aa={
//      dd:a,
//     //__proto__:a
// }
// console.log(a);
// console.log(aa);
// console.log(aa.dd);
//console.log(aa.__proto__);

let aa={
    b:33
}
let bb={

}
Object.setPrototypeOf(bb,aa);
console.log(bb);