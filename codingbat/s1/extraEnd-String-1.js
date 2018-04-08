/* 

  Problem:
  
    Given a string, return a new string made of 3 copies of the last 2
    chars of the original string. The string length will be at least 2.


  Notes:
    
    if length is greater than or equal to 2, extract last 2 chars of 
    string and repeat them thrice.
    

*/

function extraEnd (str) {
  
  var len = str.length;
  if (len >= 2) {
    var subend = str.substring(len - 2 , len);
    return subend + subend + subend;
  }
  
}

console.log(extraEnd("Hello")); //"lololo"
console.log(extraEnd("ab")); //"ababab"
console.log(extraEnd("Hi")); //"HiHiHi"

console.log(extraEnd("Candy")); //"dydydy"
console.log(extraEnd("Code")); //"dedede"

