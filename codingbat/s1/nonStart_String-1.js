/* 

  Problem:
  
    Given 2 strings, return their concatenation, except omit the first char of each. 
    The strings will be at least length 1.

  Notes:
    
    compare the lengths of both strings to be greater than one
    extract substrings from indices 1 to length.

*/

function nonStart (strA, strB) {
  
 if (strA.length >= 1 && strB.length >= 1) {
   
      return strA.substring(1, strA.length ) + strB.substring(1, strB.length );
   
  } 
  
 }

console.log(nonStart ("Hello", "There")); //"ellohere"
console.log(nonStart ("java", "code")); //"avaode"
console.log(nonStart ("shotl", "java")); //"hotlava"

console.log(nonStart ("ab", "xy")); //"by"
console.log(nonStart ("ab", "x")); //"b"
console.log(nonStart ("x", "ac")); //"c"

console.log(nonStart ("a", "x")); //""
console.log(nonStart ("kit", "kat")); //"itat"
console.log(nonStart ("mart", "dart")); //"artart"




