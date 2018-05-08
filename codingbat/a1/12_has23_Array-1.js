/* 
Problem:
	Given an int array length 2, return true if it contains a 2 or a 3.
*/
function has23 (nums) {
  
  return  (nums.includes(2) || nums.includes(3) ) ? true :false;
}

console.log(has23([2, 5]) ); // true
console.log(has23([4, 3]) ); // true
console.log(has23([4, 5]) ); // false
console.log();

console.log(has23([2, 2]) ); // true
console.log(has23([3, 2]) ); // true
console.log(has23([3, 3]) ); // true
console.log();

console.log(has23([7, 7]) ); // false
console.log(has23([3, 9]) ); // true
console.log(has23([9, 5]) ); // false

