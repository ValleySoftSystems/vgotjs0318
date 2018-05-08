/*solution to http://codingbat.com/prob/p151713 

Problem: 
  Return true if the given string begins with "mix", 
  except the 'm' can be anything, so "pix", 
  "9ix" .. all count.
Notes:
  find a substring starting at index 1 and compare to 'ix'
  return true or false based on condition above.
  
  */

function mixStart (str) {
  return (( str.substr(1, 2) == 'ix'))? true : false ;
}

console.log( mixStart("mix snacks") ); // "abc"
console.log( mixStart("pix snacks") );// "aHello"
console.log( mixStart("piz snacks") );// "adedbc"

console.log( mixStart("nix") ); // "abcdel"
console.log( mixStart("ni") );
console.log( mixStart("n") );

console.log( mixStart("") );
