/*

Problem: 

	Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.


Notes:

  check length is less than or equal to one return empty string
  if 0th char and last char are x,return the rest of string between first and last index
  if x found only at 0th index then return the substring from 1 to length
  if x  found at last index then return the substring from 0 to length-1
	

*/


function withoutX (str) {
 
  if(str.charAt(0) == 'x' && str.length <= 1) {
    return "";
  }
    
  if(str.charAt(0) == 'x' && str.charAt(str.length -1) == 'x') {
     return str.substring(1, str.length-1);
  }
  if(str.charAt(0) == 'x' && str.length > 1) {
     return str.substring(1,str.length);
  } 
  if(str.charAt(str.length - 1) == 'x' && str.length > 1) {
    return str.substring(0, str.length-1);
  } 
   
 
  return str;
}



console.log(withoutX("xHix") ); // "Hi"
console.log(withoutX("xHi") ); // → "Hi"
console.log(withoutX("Hxix") ); // "Hxi"

console.log(withoutX("Hi")); //"Hi"
console.log(withoutX("xxHi")); //"xHi"
console.log(withoutX("Hix") ); //"Hi"

console.log(withoutX("xaxbx")); //"axb"
console.log(withoutX("xx") ); //""
console.log(withoutX("x") ); //""

console.log(withoutX("")); //""
console.log(withoutX("Hello")); //"Hello"
console.log(withoutX("Hexllo")); //"Hexllo"


