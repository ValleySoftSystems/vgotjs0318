
function xyBalance(str) {
  return (str.toLowerCase().lastIndexOf('x') < str.toLowerCase().lastIndexOf('y'));
}
console.log(xyBalance("aaxbby")); //→ true
console.log(xyBalance("aaxbb")); //→ false
console.log(xyBalance("yaaxbb"));   // → false