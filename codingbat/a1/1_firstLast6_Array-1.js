/*
	Problem:
		Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
*/

function firstLast6(nums) {
 
  for(var i = 0; i < nums.length; i++) {
    return (nums[0] == 6 || nums[nums.length - 1] == 6) ? true : false;
    
  }
}
console.log( firstLast6([1, 2, 6]) ); // true
console.log( firstLast6([6, 1, 2, 3]) ); // true
console.log( firstLast6([13, 6, 1, 2, 3]) ); // false
console.log();

console.log( firstLast6([13, 6, 1, 2, 6]) ); // true
console.log( firstLast6([3, 2, 1]) ); // false
console.log( firstLast6([3, 6, 1]) ); // false
console.log();

console.log( firstLast6([3, 6]) ); // true
console.log( firstLast6([6]) ); // true
console.log( firstLast6([3]) ); // false
console.log();

console.log( firstLast6([5, 6]) ); // true
console.log( firstLast6([5, 5]) ); // false
console.log( firstLast6([1, 2, 3, 4, 6]) ); // true
console.log();

console.log( firstLast6([1, 2, 3, 4]) ); // false

