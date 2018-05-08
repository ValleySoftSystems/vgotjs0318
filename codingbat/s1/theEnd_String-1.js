/* 

  Problem:
  
    Given a string, return a string length 1 from its front, unless front 
    is false, in which case return a string length 1 from its back. 
    The string will be non-empty.
    
  Notes:
    
    extract substring of length 1
    if front is true , start it from 0 th index
    if front is false, start it from  str.length - 1
    

*/

function theEnd (str, front) {
 
  if (front == true) {
     return str.substr(0, 1);
  } else {
    return str.substr(str.length - 1 , 1);
  }
 
  
}

console.log(theEnd("Hello", true)); 
console.log(theEnd("Hello", false)); 
console.log(theEnd("oh", true)); 

console.log(theEnd("oh", false)); 
console.log(theEnd("x", true)); 
console.log(theEnd("x", false)); 

console.log(theEnd("java", true)); 
console.log(theEnd("chocolate", false)); 
console.log(theEnd("1234", true) );
console.log(theEnd("code", false) );



