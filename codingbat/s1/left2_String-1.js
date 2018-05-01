/* 

  Problem:
  
    Given a string, return a "rotated left 2" version where the 
    first 2 chars are moved to the end. The string length will be 
    at least 2.

  Notes:
    
    extract substring of chars from index 2 till end and append them at start of result
    extract substring of first 2 chars and append them at end of result
    

*/

function left2 (str) {
   
 return str.substring(2, str.length ) + str.substring(0, 2);
  
}

console.log(left2 ("Hello")); //"lloHe"
console.log(left2 ("java")); //"vaja"
console.log(left2 ("Hi")); //"Hi"

console.log(left2 ("code")); //"deco"
console.log(left2 ("cat")); //"tca"
console.log(left2 ("12345")); //"34512"

console.log(left2 ("Chocolate")); //"ocolateCh"
console.log(left2 ("bricks")); //"icksbr




