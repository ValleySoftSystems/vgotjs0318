/*solution to http://codingbat.com/prob/p165701 

Problem: 
	We'll say that a number is "teen" if it is in the range 13..19 inclusive. 
	Given 2 int values, return true if one or the other is teen, but not both.

Notes:
	checked the numbers are in range of 13..19 inclusive and stored result in new variables.
	compared new variabes and returned false when both are same.
*/



function loneTeen (a, b) {
  var teena = (a>=13 && a <= 19)?true:false;
  var teenb = (b>=13 && b <= 19)?true:false;
  return (teena === teenb)? false:true;
 
               
}

console.log( loneTeen(13, 99) );
console.log( loneTeen(21, 19) );
console.log( loneTeen(13, 13) );


console.log( loneTeen(14, 20) );
console.log( loneTeen(20, 15) );
console.log( loneTeen(16, 17) );
console.log( loneTeen(16, 9) );

console.log( loneTeen(16, 18) );
console.log( loneTeen(13, 19) );
console.log( loneTeen(13, 20) );

console.log( loneTeen(6, 18) );
console.log( loneTeen(99, 13) );
console.log( loneTeen(99, 99) );