// let a = [1, 2, 3, 4];
// for (let i in a) {
//   console.log(i); //print index
// }
//used in object mainly
const symbols = {
  yt: "youtube",
  flm: "frontlinemedia",
  dln: "desaboyinalalithananda",
};
for (const key in symbols) {
  console.log(key, symbols[key]);
  console.log(key, symbols.key);
}
console.log(Object.keys(symbols));
console.log(Object.values(symbols));
