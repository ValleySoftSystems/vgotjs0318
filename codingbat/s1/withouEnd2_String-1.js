/* 

  Problem:
  
    Given a string, return a version without both the first and last char of the string.
    The string may be any length, including 0.


  Notes:
    
    extract substring of from index 1 to index str.length - 1
    

*/

function withouEnd2 (str) {
 
 
     return str.substring(1, str.length -1);
 
 
  
}

console.log(withouEnd2("Hello")); 
console.log(withouEnd2("abc")); 
console.log(withouEnd2("ab")); 

console.log(withouEnd2("a")); 
console.log(withouEnd2("")); 
console.log(withouEnd2("coldy")); 

console.log(withouEnd2("java code")); 




