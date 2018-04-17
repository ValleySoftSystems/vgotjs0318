/* 
Problem:
	Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.

*/

function midThree (nums) {
  
  var result = new Array(3);
  var len = (nums.length - 1)/2;
  
  if (nums.length == 3) return nums;
  result[0] = nums[len -1] ;
  result[1] = nums[len];
  result[2] = nums[len + 1] ;
  
  return result;
}

console.log(midThree([1, 2, 3, 4, 5]) ); // [2, 3, 4]
console.log(midThree([8, 6, 7, 5, 3, 0, 9]) ); // [7, 5, 3]
console.log(midThree([1, 2, 3]) ); // [1, 2, 3]