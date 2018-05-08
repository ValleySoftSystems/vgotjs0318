/*

Problem: 

	Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.
	

Notes:

	check in both 0th and 1st index for 'x', if there  remove them and return the rest of the string.
	if x is there at 0th index, return the substring from 1st to length
	if x is at 1st index, return the char at 0th index and rest of the string starting from index 2
	if string length  is less than 1 return empty string
	if no condition is met, return the original string
	

*/

function withoutX2 (str) {
 
  var l = str.length;
  
   
  if(str.charAt(0) == 'x' && str.charAt(1) == 'x') {
    return str.substring(2, l);
  }
  
  if(str.charAt(0) == 'x') {
    return str.substring(1, l);
  }
  if(str.charAt(1) == 'x') {
    return str.charAt(0) + str.substring(2, l);
  }
  
  if(l <= 1) {
    return "";
  }
  return str;
}



console.log(withoutX2("xHi")  ); // "Hi"
console.log(withoutX2("Hxi") ); // → "Hi"
console.log(withoutX2("Hi") ); // "Hi"

console.log(withoutX2("xxHi")); //"Hi"
console.log(withoutX2("xxHi") ); //"Hi"
console.log(withoutX2("Hix")); //"Hix"

console.log(withoutX2("xaxb") ); //"axb"
console.log(withoutX2("xx") ); //""
console.log(withoutX2("x")); //""

console.log(withoutX2("")); //""
console.log(withoutX2("Hello")); //"Hello"
console.log(withoutX2("Hexllo")); //"Hexllo"

console.log(withoutX2("xHxllo")); //"Hxllo"


