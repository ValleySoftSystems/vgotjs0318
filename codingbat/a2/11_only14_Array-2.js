/* 
Problem:
	Given an array of ints, return true if every element is a 1 or a 4.

Notes:
	create count with value 0.
	increment count only if the value at ith index is 1 or 4.
	check the count with array length , if equal return true else return false.

*/


function only14 (nums) {
  
  var count = 0;
  
  for (var i = 0; i < nums.length; i++) {
  
      if(nums[i] == 1  || nums[i] == 4)        
        count++;
      
  }
  return count == nums.length ? true : false ;
 }

console.log(only14([1, 4, 1, 4])); //true
console.log(only14([1, 4, 2, 4]) ); //false
console.log(only14([1, 1]) );//true
console.log();

console.log(only14([4, 1]) ); //true
console.log(only14([2])); //false
console.log(only14([])); //true
console.log();

console.log(only14([1, 4, 1, 3])); //false
console.log(only14([3, 1, 3])); //false
console.log(only14([1]) ); //true
console.log();

console.log(only14([4])); //true
console.log(only14([3, 4])); //false
console.log(only14([1, 3, 4]) ); //false
console.log();

console.log(only14([1, 1, 1]) ); //true
console.log(only14([1, 1, 1, 5]) ); //false
console.log(only14([4, 1, 4, 1])  ); //true
console.log();