/*

Problem: 

  Given a string, return true if "bad" appears starting at index 0 or 1
  in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". 
  The string may be any length, including 0. Note: use .equals() to 
  compare 2 strings.
  
Notes:
  
  check for b at 0th index and for ad in substring exracted from indices 1 and 3
  check for b at 1th index and for ad in substring exracted from indices 2 and 4
  
  if anyone condition is true, return true
  else return false
  
*/

function hasBad (str) {
 
  if( (str.charAt(0) == 'b' && str.substring(1, 3) == "ad") || 
      (str.charAt(1) == 'b' && str.substring(2, 4) == "ad") ) {
     return true;
  }
  return false;
} 
 

console.log( hasBad("badxx") ); // true
console.log( hasBad("xbadxx") );  //true
console.log( hasBad("xxbadxx") ); //false

console.log( hasBad("code"));// false
console.log( hasBad("bad") ); // true
console.log( hasBad("ba") ); // false

console.log( hasBad("xba") ); //false
console.log( hasBad("xbad"));// true
console.log( hasBad("") ); // false

console.log( hasBad("badyy") ); // true