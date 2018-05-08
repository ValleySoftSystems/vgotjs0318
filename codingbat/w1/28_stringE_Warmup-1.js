/*solution to http://codingbat.com/prob/p173784

Problem: 
  
  Return true if the given string contains between 1 and 3 'e' chars.
  
Notes:

  find count of 'e' in given string
  compare count between 1 and 3
  
*/

function stringE (str) {
 
  var count = 0;
  
  for (var i = 0; i < str.length; i++ ) {
    if ( str.charAt(i) == 'e' ) {
    
      count++;
    }
    
  }
  return (count >=1 && count <=3) ? true: false;
} 
 
console.log( stringE("Hello") ); //→ true
console.log( stringE("Heelle") ); //→ true 
console.log( stringE("Heelele") ); //→ false
console.log("\n");

console.log( stringE("Hll") );//→ false
console.log( stringE("e") );//→ true
console.log( stringE("") );//→ false
console.log("\n");

