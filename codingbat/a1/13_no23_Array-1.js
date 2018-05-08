/* 
Problem:
	Given an int array length 2, return true if it does not contain a 2 or 3.
*/
function no23 (nums) {
  
  return  !(nums.includes(2) || nums.includes(3) ) ? true :false;
}

console.log(no23([4, 5]) ); // true
console.log(no23([4, 2]) ); // false
console.log(no23([3, 5]) ); // false
console.log();

console.log(no23([1, 9]) ); // true
console.log(no23([2, 9]) ); // false
console.log(no23([1, 3]) ); // false
console.log();

console.log(no23([1, 1]) ); // true
console.log(no23([2, 2]) ); // false
console.log(no23([3, 3]) ); // false
console.log();

console.log(no23([7, 8]) ); // true
console.log(no23([8, 7]) ); // true
