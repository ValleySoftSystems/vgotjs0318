/* 

  Problem:
  
    Given a string, return a string where for every char in the original, there are two chars.

  Notes:
    
    create result as an empty string
    loop through the string and take each char and add it to itself and append them to result.
    return result.
    

*/

function doubleChar (str) {
  
  var res = "";
  
  for (var i = 0; i < str.length; i++ ) {
    res += str.charAt(i) + str.charAt(i);
  }
  
  return res;
}

console.log(doubleChar("The"));//TThhee
console.log(doubleChar("AAbb")); //AAAAbbbb
console.log(doubleChar("Hi-There"));//HHii--TThheerree

console.log(doubleChar("Word!")); //WWoorrdd!!
console.log(doubleChar("!!")); //!!!!
console.log(doubleChar("")); // ""

console.log(doubleChar("a"));//aa
console.log(doubleChar("."));//..
console.log(doubleChar("aa")); //aaaa
