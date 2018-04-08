/*

Problem: 

  Given a string, return a string length 2 made of its first 2 chars. 
  If the string length is less than 2, use '@' for the missing chars.
  
Notes:
  
  find length
  if length is more than or equal to 2 , return first 2 chars
  if length is one return str + @
  if length is zero return str +@@
  
*/

function atFirst (str) {
 
  if(str.length >= 2 ) {
    return str.substring(0,2);
  } 
    else if( str.length == 1) {
      return str + "@" ;
  } 
  
  else if( str.length == 0) {
      return str +"@@";  
  }
  
  
} 
 

console.log( atFirst("hello") ); // he
console.log( atFirst("hi") ); // hi
console.log( atFirst("h") ); // h@

console.log( atFirst("") ); // he
console.log( atFirst("kitten") ); // hi
console.log( atFirst("java") ); // h@

console.log( atFirst("j") ); // he
