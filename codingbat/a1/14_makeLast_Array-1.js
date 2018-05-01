/* 
Problem:
	Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more. Note: by default, a new int array contains all 0's.
*/

function makeLast (nums) {
  
  var result = new Array(nums.length * 2);
  
  for(var i = 0; i < result.length; i++) {
    
     if(!result[i]) result[i] = 0;
     if(i == result.length - 1) result[result.length - 1] = nums[nums.length - 1];
  }
 
  
  return  result;
}

console.log(makeLast([4, 5, 6]) ); // [0, 0, 0, 0, 0, 6]
console.log(makeLast([1, 2]) ); // [0, 0, 0, 2]
console.log(makeLast([3]) ); // [0, 3]
console.log();

console.log(makeLast([0]) ); // [0, 0]
console.log(makeLast([7, 7, 7]) ); // [0, 0, 0, 0, 0, 7]
console.log(makeLast([3, 1, 4]) ); // [0, 0, 0, 0, 0, 4]
console.log();

console.log(makeLast([1, 2, 3, 4]) ); // [0, 0, 0, 0, 0, 0, 0, 4]
console.log(makeLast([1, 2, 3, 0]) ); // [0, 0, 0, 0, 0, 0, 0, 0]
console.log(makeLast([2, 4]) ); // [0, 0, 0, 4]




