/* 
Problem:
	Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.
*/
function double23 (nums) {
  
  var count2 = 0, count3 = 0;
  
  for(var i = 0; i < nums.length; i++) {
    
     if(nums[i] == 2 ) count2++; 
     if(nums[i] == 3 ) count3++;
  }
  
  return count2 == 2  || count3 == 2;
  
 }

console.log(double23([2, 2]) ); // true
console.log(double23([3, 3]) ); // true
console.log(double23([2, 3]) ); // false
console.log();

console.log(double23([3, 2]) ); // false
console.log(double23([4, 5]) ); // false
console.log(double23([2]) ); // false
console.log();

console.log(double23([3]) ); // false
console.log(double23([]) ); // false
console.log(double23([3, 4]) ); // false
