/* 

  Problem:
  
    Given a string of even length, return the first half. 
    So the string "WooHoo" yields "Woo".


  Notes:
    
    find length. if length % 2 is zero, then extract the substring of str from 0 to length/2

*/

function firstHalf (str) {
  
  var len = str.length;
   
  if (len % 2 == 0) {
    
    return str.substring(0, (len / 2) );
  }
  
 }

console.log(firstHalf ("WooHoo")); //"Woo"
console.log(firstHalf ("HelloThere")); //"Hello"
console.log(firstHalf ("abcdef")); //"abc"

console.log(firstHalf ("ab")); //"a"
console.log(firstHalf ("")); //""
console.log(firstHalf ("0123456789")); //"01234"

console.log(firstHalf ("kitten")); //"kit"

