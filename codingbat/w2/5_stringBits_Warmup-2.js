/*solution to http://codingbat.com/prob/p165666

Problem: 
  Given a string, return a new string made of every 
  other char starting with the first, so "Hello" yields "Hlo".
  
Notes:
  assign first char of string to result
  starting from second char find the char at every other
  index and append to result.
  
*/

function stringBits (str) {
 
  var res = str.charAt(0);
  
  for (var i = 1; i < str.length; i++) {
    
    if(i % 2 == 0) {
       res += str.charAt(i);
    }
    
  }
    
  return res;
 
} 
 

console.log( stringBits("Hello") ); //→ Hlo
console.log( stringBits("Hi") ); //→ H
console.log( stringBits("Heeololeo") ); //→ Hello

console.log( stringBits("HiHiHi") ); //→ HHH
console.log( stringBits("") );  //→ ""
console.log( stringBits("Greetings") ); // → Getns

console.log( stringBits("Chocoate") ); //Coot
console.log( stringBits("pi") );//→ p
console.log( stringBits("Hello Kitten") ); //HloKte

console.log( stringBits("hxaxpxpxy") ); //happy