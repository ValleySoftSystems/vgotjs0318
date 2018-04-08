/* 

  Problem:
  
    Given an "out" string length 4, such as "<<>>", and a word, return a
    new string where the word is in the middle of the out string, e.g.
    "<<word>>". Note: use str.substring(i, j) to extract the String
    starting at index i and going up to but not including index j.

  Notes:
    
    find out length of out.
    extract substrings of out from 0,2 and length-2 and length.
    append them to word and return the result.
    

*/

function makeOutWord (out, word) {
  
  var len = out.length;
  return out.substring(0, 2) + word + out.substring(len-2, len);
}

console.log(makeOutWord("<<>>", "Yay")); //"<<Yay>>"
console.log(makeOutWord("<<>>", "WooHoo")); //"<<WooHoo>>"
console.log(makeOutWord("[[]]", "word")); //"[[word]]"

console.log(makeOutWord("HHoo", "Hello")); //"HHHellooo"
console.log(makeOutWord("abyz", "YAY")); //"abYAYyz"

