/* 
Problem:
	Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.
*/

function makeEnds (nums) {
  
  var firstlast = new Array(2);
  
  firstlast[0] = nums[0];
  firstlast[1] = nums[nums.length - 1];
  
  return firstlast;
}

console.log(makeEnds([1, 2, 3]) ); // [1, 3]
console.log(makeEnds([1, 2, 3, 4]) ); // [1, 4]
console.log(makeEnds([7, 4, 6, 2]) ); // [7, 2]
console.log();
console.log(makeEnds([1, 2, 2, 2, 2, 2, 2, 3]) ); // [1, 3]
console.log(makeEnds([7, 4]) ); // [7, 4]
console.log(makeEnds([7]) ); // [7, 7]
console.log();
console.log(makeEnds([5, 2, 9]) ); // [5, 9]
console.log(makeEnds([2, 3, 4, 1]) ); // [2, 1]



