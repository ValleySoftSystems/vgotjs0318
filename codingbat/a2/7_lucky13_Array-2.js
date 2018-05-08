/* 
Problem:
	Given an array of ints, return true if the array contains no 1's and no 3's.

Notes:
	create a boolean var with true as default value
	loop through array , make the boolean value false if 1 or 3 appears in ith index
	return boolean value
*/

function lucky13(nums) {
  
  var contains22 = true;
  
  for (var i = 0; i < nums.length; i++) {
    
     if((nums[i] == 1) || (nums[i] == 3) ){
       
       contains22 = false;
       break;
     } 
        
  }
  return contains22;
 }

console.log(lucky13([0, 2, 4])); //true
console.log(lucky13([1, 2, 3])); //false
console.log(lucky13([1, 2, 4])); //false
console.log();

console.log(lucky13([2, 7, 2, 8])); //true
console.log(lucky13([2, 7, 1, 8])); //false
console.log(lucky13([3, 7, 2, 8]) ); //false
console.log();

console.log(lucky13([2, 7, 2, 1])); //false
console.log(lucky13([1, 2])); //false
console.log(lucky13([2, 2])); //true
console.log();

console.log(lucky13([2])); //true
console.log(lucky13([3]) ); //false
console.log(lucky13([])); //true
console.log();

