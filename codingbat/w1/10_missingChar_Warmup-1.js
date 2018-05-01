/*solution to http://codingbat.com/prob/p125268

Problem: 
  Given a non-empty string and an int n, return a new string where 
  the char at index n has been removed. The value of n will be a 
  valid index of a char in the original string 
  (i.e. n will be in the range 0..str.length()-1 inclusive).
  
Notes:
  find char at nth index
  replace it with empty str
  
*/

function missingChar (str, n) {
 
  var l = str.length;
  var res = str[n];
  if( n >= 0 && n <= l-1) {
    
      res = str.replace(res, "");
  }
    
  return res;
} 
 
console.log( missingChar("kitten", 1) ); //→ "ktten"
console.log( missingChar("kitten", 0) ); //→ "itten"
console.log( missingChar("kitten", 4) ); //→ "kittn"

console.log( missingChar("Hi", 0)  ); //"i"
console.log( missingChar("Hi", 1) );  //→ "H"  
console.log( missingChar("code", 0) );//→ "ode"

console.log( missingChar("code", 1) );//→ "cde"
console.log( missingChar("code", 2) ); //"coe"
console.log(missingChar("code", 3) ); //"cod"

console.log(missingChar("chocolate", 8) ); //"chocolat"
