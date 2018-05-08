/* 

  Problem:
  
    Given a string, return a version without the first and last char, 
    so "Hello" yields "ell". The string length will be at least 2.


  Notes:
    
    find length. if length is greaters than or 2 , extract sustring of
    given string from indices 1 to length-1.
    

*/

function withoutEnd (str) {
  
  var len = str.length;
   
  if (len >= 2 ) {
    
    return str.substring(1, len - 1 );
  }
  
 }

console.log(withoutEnd ("Hello")); //"ell"
console.log(withoutEnd ("java")); //"av"
console.log(withoutEnd ("coding")); //"odin"

console.log(withoutEnd ("code")); //"od"
console.log(withoutEnd ("ab")); //""
console.log(withoutEnd ("Chocolate!")); //"hocolate"

console.log(withoutEnd ("kitten")); //"itte"
console.log(withoutEnd ("woohoo")); //"ooho"

