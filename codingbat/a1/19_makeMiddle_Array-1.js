/* 
Problem:
	Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.
*/

function makeMiddle (nums) {
  
  var result = new Array(2);
  
  if(nums.length == 2)  result = nums;
  
  result[0] = nums[nums.length/2 - 1] ;
  result[1] = nums[nums.length/2 ];
  
  return result;
}

console.log(makeMiddle([1, 2, 3, 4]) ); // [2, 3]
console.log(makeMiddle([7, 1, 2, 3, 4, 9]) ); // [2, 3]
console.log(makeMiddle([1, 2]) ); // [1, 2]
console.log();

console.log(makeMiddle([5, 2, 4, 7]) ); // [2, 4]
console.log(makeMiddle([9, 0, 4, 3, 9, 1]) ); // [4, 3]
