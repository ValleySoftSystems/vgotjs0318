/* 

  Problem:
  
    Given a string, return a "rotated right 2" version where the last 2 
    chars are moved to the start. The string length will be at least 2.

  Notes:
    
    extract substring of last 2 chars and append them at start of result
    extract substring of rest of chars and append them at end of result
    

*/

function right2 (str) {
   
 return str.substring(str.length - 2, str.length ) + str.substring(0, str.length - 2);
  
}

console.log(right2 ("Hello")); 
console.log(right2 ("java")); 
console.log(right2 ("Hi")); 

console.log(right2 ("code")); 
console.log(right2 ("cat")); 
console.log(right2 ("12345")); 

console.log(right2 ("Chocolate")); 
console.log(right2 ("bricks")); 




