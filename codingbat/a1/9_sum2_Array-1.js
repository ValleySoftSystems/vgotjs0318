/*
	Problem:
		Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.
*/

function sum2 (nums) {
  
  
  var sum = 0;
  
  if(!nums.length) return 0; 
  
  if(nums.length == 2) return nums[0] + nums[1] ;
  
  for(var i = 0; i < nums.length; i++) {
    
    if(i == 2) break;
    
    sum += nums[i];
    
  }
  return sum;
    
}

console.log(sum2([1, 2, 3]) ); // 3
console.log(sum2([1, 1]) ); // 2
console.log(sum2([1, 1, 1, 1]) ); // 2
console.log();

console.log(sum2([1, 2]) ); // 3
console.log(sum2([1]) ); // 1
console.log(sum2([]) ); // 0
console.log();

console.log(sum2([4, 5, 6]) ); // 9