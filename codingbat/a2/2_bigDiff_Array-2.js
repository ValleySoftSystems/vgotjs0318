/* 
Problem:
	Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.

Notes:
	loop through the array
	find min value and max value
	return the difference
	

*/

function bigDiff (nums) {

  var max = nums[0];
  var min = nums[0];
  
  for (var i = 0; i < nums.length;i++ ) {
    max = (nums[i] > max )? nums[i]: max;
    min = (nums[i] < min )? nums[i]: min;
  }
  return (max - min);
}



console.log(bigDiff([10, 3, 5, 6])); // 7
console.log(bigDiff([7, 2, 10, 9])); // 8
console.log(bigDiff([2, 10, 7, 2])); //8

console.log(bigDiff([2, 10])); //8
console.log(bigDiff([10, 2])); //8
console.log(bigDiff([10, 0])); //10

console.log(bigDiff([2,3])); //1
console.log(bigDiff([2, 2])); //0
console.log(bigDiff([2])); //0

console.log(bigDiff([5, 1, 6, 1, 9, 9]));//8
console.log(bigDiff([7, 6, 8, 5])); //3
console.log(bigDiff([7, 7, 6, 8, 5, 5, 6])); //3
