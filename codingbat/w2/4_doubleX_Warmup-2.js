/*solution to http://codingbat.com/prob/p186759

Problem: 
  Given a string, return true if the first instance of "x" 
  in the string is immediately followed by another "x".
  
Notes:
  find index of first x in string.
  when next  x is found difference between indexes must be
  equal to one.
  
*/

function doubleX (str) {
 
  var firstx, nextx;
  
  for (var i = 0; i < str.length; i++) {
    if(str.charAt(i) == 'x') {
       firstx = i;
       break;
    }
  }
  
  nextx = str.indexOf('x', firstx +1 );
    
  return (nextx - firstx == 1) ? true:false;
 
} 
 

console.log( doubleX("axxbb") ); //→ true
console.log( doubleX("axaxax") ); //→ false
console.log( doubleX("xxxxx") ); //→ true

console.log( doubleX("xaxxx") ); //→ false
console.log( doubleX("aaaax") );  //→ false
console.log( doubleX("") ); // → false

console.log( doubleX("abc") ); //false
console.log( doubleX("x") );//→ false
console.log( doubleX("xx") ); //true

console.log( doubleX("xax") ); //false
console.log( doubleX("xaxx") );//→ false