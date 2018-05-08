/*
Problem:
	Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length */will be at least 1.
*/

function swapEnds  (nums) {
  
  
  var temp = nums[nums.length - 1];
  nums[nums.length - 1] = nums[0];
  nums[0] = temp;
    
  return nums;
}

console.log(swapEnds([1, 2, 3, 4]) ); // [4, 2, 3, 1]
console.log(swapEnds([1, 2, 3]) ); // [3, 2, 1]
console.log(swapEnds([8, 6, 7, 9, 5]) ); // [5, 6, 7, 9, 8]

console.log(swapEnds([3, 1, 4, 1, 5, 9]) ); // [9, 1, 4, 1, 5, 3]
console.log(swapEnds([1, 2]) ); // [2, 1]
console.log(swapEnds([1]) ); // [1]
