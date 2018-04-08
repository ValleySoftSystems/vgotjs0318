/*

Problem: 
  
  Given 2 strings, a and b, return a new string made of the first char
  of a and the last char of b, so "yo" and "java" yields "ya". 
  If either string is length 0, use '@' for its missing char.
  
  
  
Notes:
  
  if string length is zero assign "@" to string.
  return the first char of first string and last char of second string
  else return the result of concatenation of two strings.
  
*/

function lastChars  (strA, strB) {
 
   
  if (strA.length == 0 ) {
    strA = "@";
      
  }
  if ( strB.length == 0) {
    strB = "@";
      
  }
     
   
  return strA.charAt(0) + strB.charAt(strB.length - 1);
 
} 
 

console.log( lastChars ("last", "chars") ); // ls
console.log( lastChars("yo", "java") ); // ya
console.log( lastChars("hi", "") ); // h@

console.log( lastChars("", "hello") ); // @o
console.log( lastChars("", "") ); // @@
console.log( lastChars("kitten", "hi") ); // ki

console.log( lastChars ("k", "zip") ); // kp
console.log( lastChars("kitten", "") ); // k@
console.log( lastChars("kitten", "zip") ); // kp
