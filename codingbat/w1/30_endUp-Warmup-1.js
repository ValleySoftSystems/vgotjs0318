/*solution to http://codingbat.com/prob/p125268
Problem: 
  Given a string, return a new string where the last 3 chars are now 
  in upper case. If the string has less than 3 chars, uppercase 
  whatever is there. 
  Note that str.toUpperCase() returns the uppercase version of a string.
  
Notes:

  if length is less than 3 return the uppercase string
  if not return the substring of last 3 chars
  
  
*/

function endUp (str) {
 
  var l = str.length;
  
  if( l < 3) {
    return str.toUpperCase();
  } else {
    var last3 = str.substring ( l - 3, l );
    return str.replace( last3 , last3.toUpperCase() );
  }
} 
 
console.log( endUp("Hello") );//→ "HeLLO"
console.log( endUp("hi there"));// → "hi thERE"
console.log( endUp("hi") ) ; //→ "HI"

console.log( endUp("woo hoo") ); //→ "woo HOO"
console.log( endUp("xyz12") ); //→ "xyZ12"
console.log( endUp("x") ); //→ "X"

console.log( endUp("") ); //→ ""

