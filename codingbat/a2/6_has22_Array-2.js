/* 
Problem:
	Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

Notes:
	create a boolean var with false as default value
	loop through array , make the boolean value true only if 2 appears in ith and i+1 th index
	return boolean value
*/


function has22(nums) {
  
  var contains22 = false;
  
  for (var i = 0; i < nums.length; i++) {
    
     if((nums[i] == 2) && (nums[i+1] == 2) ){
       
       contains22 = true;
       break;
     } 
        
  }
  return contains22;
 }

console.log(has22([1, 2, 2])); //true
console.log(has22([1, 2, 1, 2])); //false
console.log(has22([2, 1, 2])); //false
console.log();

console.log(has22([2, 2, 1, 2])); //true
console.log(has22([1, 3, 2])); //false
console.log(has22([1, 3, 2, 2])); //true
console.log();

console.log(has22([2, 3, 2, 2]) ); //true
console.log(has22([4, 2, 4, 2, 2, 5])); //true
console.log(has22([1, 2])); //false
console.log();

console.log(has22([2, 2])); //true
console.log(has22([2])); //false
console.log(has22([])); //false
console.log();

console.log(has22([3, 3, 2, 2]));//true
console.log(has22([5, 2, 5, 2]));//false