/* 
Problem:
	Given a number n, create and return a new int array of length n, containing the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case just return a length 0 array. You do not need a separate if-statement for the length-0 case; the for-loop should naturally execute 0 times in that case, so it just works. The syntax to make a new int array is: new int[desired_length]

Notes:
	create an empty array
	create a loop to run till given number(array length) and create elements from 0 to n.
	return the array
*/

function fizzArray (n) {
  
  var nums = new Array();
  for (var i = 0; i < n; i++) {
  
      nums[i] = i;
  }
  return nums ;
 }

console.log(fizzArray(4) ); //[0, 1, 2, 3]
console.log(fizzArray(1) ); //[0]
console.log(fizzArray(10) ); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log();

console.log(fizzArray(0) ); //→ []
console.log(fizzArray(2)); //[0,1]
console.log(fizzArray(7) ); //[0, 1, 2, 3, 4, 5, 6]
console.log();

