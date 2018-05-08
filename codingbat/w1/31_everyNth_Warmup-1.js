/*solution to http://codingbat.com/prob/p125268

Problem: 
  Given a non-empty string and an int N, return the string made 
  starting with char 0, and then every Nth char of the string. 
  So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.
  
Notes:
assign first char of string to result string
from the index of Nth char start adding the Nth char to 
result string  by incrementing the loop for every Nth char.
  
*/

function everyNth (str, n) {
 
  var l = str.length;
  var res = str[0];
  if( n >= 1) {
    for ( var i = n ;i < l ; i += n ){
      res =  res  + str[i] ; 
  
    }
  }
    
  return res;
} 
 
console.log( everyNth("Miracle", 2) ); //→ "Mrce"
console.log( everyNth("abcdefg", 2) ); //→ "aceg"
console.log( everyNth("abcdefg", 3) ); //→ "adg"

console.log( everyNth("Chocolate", 3) ); //Cca
console.log( everyNth("Chocolates", 3) );//→ "Ccas"  
console.log( everyNth("Chocolates", 4) );//→ "Coe"

console.log( everyNth("Chocolates", 100) );//→ "C"
console.log( everyNth("Srujana", 2));

