
/*

Problem: 

	Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".


Notes:
 
 	if string length is less than 2 return flase.
 	check substrings of str from 0,2 and length-2, length
 	return true if equal
 

 */

function frontAgain  (str) {
 
  if (str.length < 2)
    return false;
  
  return str.substring(0, 2) === str.substring(str.length - 2 , str.length) ;
    
} 
 

console.log( frontAgain("edited") ); // true
console.log( frontAgain("edit") ); // false
console.log( frontAgain("ed") ); // true
console.log( frontAgain("jj") ); // true
console.log( frontAgain("jjj")); //true
console.log( frontAgain("jjjj") ); // true

console.log( frontAgain("jjjk")); //false
console.log( frontAgain("x") ); // false
console.log( frontAgain("") ); // false
console.log( frontAgain("java") ); // false
console.log( frontAgain("javaja") );//true
