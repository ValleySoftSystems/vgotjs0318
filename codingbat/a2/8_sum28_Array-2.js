/* 
Problem:
	Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.	

Notes:
	define sum with zero value.
	loop hrough the array. if value atith index is 2 then add it to sum.
	if sum is 8 return true otherwise return false.
*/

function sum28 (nums) {
  
  var sum = 0;
  
  for (var i = 0; i < nums.length; i++) {
  
     if(nums[i] == 2 )        
       sum += nums[i];

  }
  return sum == 8?true:false ;
 }

console.log(sum28([2, 3, 2, 2, 4, 2])); //true
console.log(sum28([2, 3, 2, 2, 4, 2, 2]) ); //false
console.log(sum28([1, 2, 3, 4]) ); //false
console.log();

console.log(sum28([2, 2, 2, 2])); //true
console.log(sum28([1, 2, 2, 2, 2, 4])); //true
console.log(sum28([])  ); //false
console.log();

console.log(sum28([2])); //false
console.log(sum28([8])); //false
console.log(sum28([2, 2, 2])); //false
console.log();

console.log(sum28([2, 2, 2, 2, 2])); //false
console.log(sum28([1, 2, 2, 1, 2, 2])  ); //true
console.log(sum28([5, 2, 2, 2, 4, 2])); //true
console.log();
