/*solution to http://codingbat.com/prob/p117334

Problem: 
  Given a non-empty string like "Code" return a string 
  like "CCoCodCode".
Notes:
  make substrings of 1 char, 2 chars, 3 chars..till string length 
  starting from index 0 
  append the substrings to result
  
  
*/

function stringSplosion (str) {
 
  var res = "";
  
  for (var i = 0; i < str.length; i++) {
    
       res += str.substring(0, i+1) ;
       
  }
    
  return res;
 
} 
 

console.log( stringSplosion("Code") ); //→ CCoCodCode
console.log( stringSplosion("abc") ); //→ aababc
console.log( stringSplosion("ab") ); //→ aab

console.log( stringSplosion("x") ); //→ x
console.log( stringSplosion("fade") );  //→ ffafadfade
console.log( stringSplosion("There") ); // → TThTheTherThere

console.log( stringSplosion("Kitten") ); //KKiKitKittKitteKitten
console.log( stringSplosion("Bye") );//→ BByBye
console.log( stringSplosion("Good") ); //GGoGooGood

console.log( stringSplosion("bad") ); //"BBaBad"