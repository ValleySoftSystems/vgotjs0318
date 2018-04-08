/* 
  Problem:
	We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

   Notes:
   	Compare the lastindex of 'x' and 'y' in given string.
   	if index of x is less than equal to index of y, return true.
*/

function xyBalance  (str) {
  
  str = str.toLowerCase();            
  return (str.lastIndexOf('x') <= str.lastIndexOf('y')); // return (xindex <= yindex)? true:false;   

}
  
console.log(xyBalance("aaxbby") );//true
console.log(xyBalance("aaxbb") ); //false
console.log(xyBalance("yaaxbb"));//false
console.log();

console.log(xyBalance("yaaxbby")); //true
console.log(xyBalance("xaxxbby") ); //true
console.log(xyBalance("xaxxbbyx")  );//false
console.log();

console.log(xyBalance("xxbxy")); // true
console.log(xyBalance("xxbx")); // false
console.log(xyBalance("bbb"));//false
console.log();

console.log(xyBalance("xy"));//true
console.log(xyBalance("y") ); //true
console.log(xyBalance("x"));//false
console.log();

console.log(xyBalance("") );//true
console.log(xyBalance("yxyxyxyx") );//false
console.log(xyBalance("yxyxyxyxy") );//true
console.log();

console.log(xyBalance("12xabxxydxyxyzz") );//true



