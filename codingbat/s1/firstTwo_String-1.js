/* 

  Problem:
  
    Given a string, return the string made of its first two chars, 
    so the String "Hello" yields "He". If the string is shorter than 
    length 2, return whatever there is, so "X" yields "X", and the 
    empty string "" yields the empty string "". Note that str.length() 
    returns the length of a string.


  Notes:
    
    return extract last 2 chars of string
    if extracted string length is less than 2,  return the original string.
    

*/

function firstTwo (str) {
  
  var len = str.length;
  var start2 = str.substring(0, 2);
  
  if (start2 < 2) {
    
    return str;
  }
  
  return start2;
}

console.log(firstTwo("Hello")); //"He"
console.log(firstTwo("abcdefg")); //"ab"
console.log(firstTwo("ab")); //"ab"

console.log(firstTwo("a")); //"a"
console.log(firstTwo("")); //""
console.log(firstTwo("Kitten")); //"Ki"

console.log(firstTwo("hi")); //"hi"
console.log(firstTwo("hiya")); //"hi"
