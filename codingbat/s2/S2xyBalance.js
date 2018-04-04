function xyBalance(str) {
 var str = str.toLowerCase();
return str.lastIndexOf("x") <= str.lastIndexOf("y");
}

console.log(xyBalance("aaxbby"));//t
console.log(xyBalance("aaxbb")); //f
console.log(xyBalance("yaaxbb")); //f
console.log(xyBalance("yaaxbby")); //t
console.log(xyBalance("xaxxbby")); //t
console.log(xyBalance("xaxxbbyx")); //f
console.log(xyBalance("xxbxy")); //t
console.log(xyBalance("xxbx")); //f
console.log(xyBalance("bbb")); //t
console.log(xyBalance("bxbb")); //f
console.log(xyBalance("bxyb")); //t
console.log(xyBalance("xy")); //t
console.log(xyBalance("y")); //t
console.log(xyBalance("x")); //f
console.log(xyBalance("")); //t
console.log(xyBalance("yxyxyxyx")); //f
console.log(xyBalance("yxyxyxyxy")); //t
console.log(xyBalance("12xabxxydxyxyzz")); //t