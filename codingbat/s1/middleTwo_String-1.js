/* 

  Problem:
  
    Given a string of even length, return a string made of the middle two chars, 
    so the string "string" yields "ri". The string length will be at least 2.


  Notes:
    
    extract substring of from index l/2 -1  to index l/2 +1
    

*/

function middleTwo (str) {
 
 var l = str.length;
 if(l >= 2 && l %2 == 0) {
    return str.substring(l/2 - 1 , l/2 + 1);
 }
  
}

console.log(middleTwo ("string")); 
console.log(middleTwo ("code")); 
console.log(middleTwo ("Practice")); 

console.log(middleTwo ("ab")); 
console.log(middleTwo ("0123456789")); 




