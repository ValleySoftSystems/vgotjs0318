/*

Problem: 

	Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.


Notes:

	if given string is empty or of length 2 , return empty string
	if string length is one return the same string
	if first2 and last2 are same then return the substring from 2 to l
	

*/

function without2 (str) {
  
  var l = str.length ;
  var first2 = str.substr(0, 2);
  var last2 = str.substr(l-2, 2);
  
    
  if (l == 0 || l == 2) return "";
  
  if (l == 1) return str;
  
  if (first2 == last2 ) {
        
        return str.substring(2, l);
  }
  
  return str;
  
}

console.log( without2("HelloHe") ); // "lloHe"
console.log( without2("HelloHi") ); // "HelloHi
console.log( without2("Hi") ); // ""

console.log( without2("Chocolate") ); // "Chocolate"
console.log( without2("xxx") ); // "x"
console.log( without2("xx") ); // ""

console.log( without2("x") ); // "x"
console.log( without2("") ); // ""
console.log( without2("Fruits") );//"Fruits"