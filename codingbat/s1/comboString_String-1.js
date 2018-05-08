/* 

  Problem:
  
    Given 2 strings, a and b, return a string of the form 
    short+long+short, with the shorter string on the outside 
    and the longer string on the inside. The strings will not 
    be the same length, but they may be empty (length 0).

  Notes:
    
    compare the lengths of both strings, which ever has more 
    length keep it in middle
    

*/

function comboString  (strA, strB) {
  
 if (strA.length > strB.length) {
   
      return strB + strA + strB;
   
  } else {
    
    return strA + strB + strA;
  }
  
 }

console.log(comboString ("Hello", "hi")); //"hiHellohi"
console.log(comboString ("hi", "Hello")); //"hiHellohi"
console.log(comboString ("aaa", "b")); //"baaab"

console.log(comboString ("b", "aaa")); //"baaab"
console.log(comboString ("aaa", "")); //"aaa"
console.log(comboString ("", "bb")); //"bb"

console.log(comboString ("aaa", "1234")); //"aaa1234aaa"
console.log(comboString ("aaa", "bb")); //"bbaaabb"
console.log(comboString ("a", "bb")); //"abba"

console.log(comboString ("bb", "a")); //"abba"
console.log(comboString ("xyz", "ab")); //"abxyzab"


