/*solution to http://codingbat.com/prob/p142270

Problem: 
  Given a string and a non-negative int n, 
  return a larger string that is n copies of the original string.
  
Notes:
  take emprty string
  append the given string n times
  
*/

function stringTimes (str, n) {
 
  var res = "";
  
  while( n >= 1 ) {
      res = res + str ;
      n--;
  }
    
  return res;
} 
 
console.log( stringTimes("Hi", 2) ); //→ "HiHi"
console.log( stringTimes("Hi", 3) ); //→ "HiHiHi"
console.log( stringTimes("Hi", 1) ); //→ "Hi"

console.log( stringTimes("Hi", 0)  ); //→ ""
console.log( stringTimes("Hi", 5) );  //→ "HiHiHiHiHi"
console.log( stringTimes("Oh Boy!", 2) );// → "Oh Boy!Oh Boy!"

console.log( stringTimes("x", 4) );//→ "xxxx"
console.log( stringTimes("", 4)  ); //→ ""
console.log( stringTimes("code", 2) ); //→ "codecode"

console.log( stringTimes("code", 3));//→ "codecodecode"
