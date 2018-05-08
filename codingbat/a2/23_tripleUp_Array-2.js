/* 
Problem:
  
Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.

Notes:
  loop through the array
  	check value at i+1 th index is equal to value at ith index plus 1 and 
  		value at  i+2 th index is equal to value at ith index plus 2
  	if yes return true.
  	else return false.
    
*/

function tripleUp (nums) {
  
  var hasTriple = false;
  
  for (var i = 0; i < nums.length; i++) {
    
    if((nums[i + 1] == nums[i] + 1) && (nums[i + 2] == nums[i] + 2) ) {
      hasTriple = true;
      
    }
  }
  return hasTriple;
}

console.log(tripleUp([1, 4, 5, 6, 2]) ); // true
console.log(tripleUp([1, 2, 3]) ); // true
console.log(tripleUp([1, 2, 4]) ); // false
console.log();

console.log(tripleUp([1, 2, 4, 5, 7, 6, 5, 6, 7, 6]) ); // true
console.log(tripleUp([1, 2, 4, 5, 7, 6, 5, 7, 7, 6]) ); // false
console.log(tripleUp([1, 2]) ); // false
console.log();

console.log(tripleUp([1]) ); // false
console.log(tripleUp([]) ); // false
console.log(tripleUp([10, 9, 8, -100, -99, -98, 100]) ); // true
console.log();

console.log(tripleUp([10, 9, 8, -100, -99, 99, 100]) ); // false
console.log(tripleUp([-100, -99, -99, 100, 101, 102]) ); // true
console.log(tripleUp([2, 3, 5, 6, 8, 9, 2, 3]) ); // false
