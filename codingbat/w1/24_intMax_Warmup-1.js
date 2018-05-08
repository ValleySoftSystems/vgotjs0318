/*solution to http://codingbat.com/prob/p101887

Problem: 
  Given three int values, a b c, return the largest.
  
Notes:
  assign max to first int
  comapre max and second int
  comapre result with third int
  
  */

function intMax (a, b, c) {
  var max = a;
  
  max = ( max > b ) ? max : b;
  max = ( max > c ) ? max : c;
  
  return max;
}


console.log( intMax(1, 2, 3) );
console.log( intMax(1, 3, 2) ); 
console.log( intMax(1, 3, 2) );
console.log( intMax(9, 3, 3) );

console.log( intMax(3, 9, 3) ); 
console.log( intMax(3, 3, 9) );
console.log( intMax(8, 2, 3) );


console.log( intMax(-3, -1, -2) );
console.log( intMax(6, 2, 5) );
console.log( intMax(5, 6, 2) ); 

console.log( intMax(5, 2, 6) );