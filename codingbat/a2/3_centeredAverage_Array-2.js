/* 
Problem:
	Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.

Notes:
	find max and min elements of array.
	find first index of max and min 
	remove the lements at those indexes (removes one occurance of min and max in array)
	computer the mean average and return it.

*/

function centeredAverage (nums) {

  var max = nums[0];
  var min = nums[0];
  var meansum = 0;
  
  for (var i = 0; i < nums.length;i++ ) {

      max = (nums[i] > max )? nums[i]: max;
      min = (nums[i] < min )? nums[i]: min;

  }
  nums.splice(nums.indexOf(max), 1);
  nums.splice(nums.indexOf(min), 1);
  
  for(var i = 0; i < nums.length;i++ ) {
      meansum += nums[i];

  }
  
  return Math.round(meansum/nums.length);
}



console.log(centeredAverage([1, 2, 3, 4, 100])); // 3
console.log(centeredAverage([1, 1, 5, 5, 10, 8, 7])); // 5
console.log(centeredAverage([-10, -4, -2, -4, -2, 0])); //-3

console.log(centeredAverage([5, 3, 4, 6, 2])); //4
console.log(centeredAverage([5, 3, 4, 0, 100])); //4
console.log(centeredAverage([100, 0, 5, 3, 4])); //4

console.log(centeredAverage([4, 0, 100])); //4
console.log(centeredAverage([0, 2, 3, 4, 100])); //3
console.log(centeredAverage([1, 1, 100])); //1

console.log(centeredAverage([7, 7, 7]));//7
console.log(centeredAverage([1, 7, 8])); //7
console.log(centeredAverage([1, 1, 99, 99]));//50
console.log(centeredAverage([1000, 0, 1, 99])); //50

console.log(centeredAverage([4, 4, 4, 4, 5]));//4
console.log(centeredAverage([4, 4, 4, 1, 5])); //4
console.log(centeredAverage([6, 4, 8, 12, 3])); //6
