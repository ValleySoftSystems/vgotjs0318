/*solution to http://codingbat.com/prob/p172021

Problem: 
  Given 2 int values, return whichever value is nearest to the value 10,
  or return 0 in the event of a tie. Note that Math.abs(n) returns the 
  absolute value of a number.
  
Notes:
  find absolute difference between firstnum and 10
  secondnum and 10 
  if both are equal return 0
    if not check which one is less than the other
    return that less value.
  
  */

function close10 (a, b) {
  
  var closenum;
  
  if( (Math.abs( a - 10 )) == (Math.abs( b - 10 )) ) {
    closenum = 0;
  } else if( (Math.abs( a - 10 )) < (Math.abs( b - 10 )) ) {
    closenum = a ;
  } else  {
    closenum = b;
  }
  return closenum;
}


console.log( close10(8, 13) );
console.log( close10(13, 8) ); 
console.log( close10(13, 7) );

console.log( close10(7, 13) );
console.log( close10(9, 13) ); 
console.log( close10(13, 8) );

console.log( close10(10, 12) );
console.log( close10(11, 10) );
console.log( close10(5, 21) );

console.log( close10(0, 20) ); 
console.log( close10(10, 10) );

