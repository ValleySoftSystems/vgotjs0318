/*

Problem: 

	Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. 
	If there are fewer than 2 chars, use whatever is there.

Notes:

	extract substring from 0 to 2  indices, append 2 more copies of the same and return it
	if string length is less than 2 , then append 2 more cpoies of string to original and return it 

*/

function extraFront (str) {
  
  var res = str.substring(0, 2);
  
 
  if(len < 2) {
      return  str + str + str;
  }  
     
  return res + res + res;
} 
 

console.log( extraFront("") ); // ""
console.log( extraFront("Candy") ); // CaCaCa
console.log( extraFront("Code") ); // CoCoCo

console.log( extraFront("Hello") ); // "HeHeHE"
console.log( extraFront("ab") ); // ababab
console.log( extraFront("H") ); // HHH






