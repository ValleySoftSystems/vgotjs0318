/* 
Problem:
	Given an array of ints, return true if it contains no 1's or it contains no 4's.

Notes:
	increment count of 1 if value at ith index is 1
	increment count of 4 if value at ith index is 4
	check if both counts are equal to zero , return the result.
*/

function no14 (nums) {
  
 var count1 = 0, count4 = 0;
  
  for (var i = 0; i < nums.length; i++) {
  
      if(nums[i] == 1 )        
        count1 ++;
      if (nums[i] == 4)
        count4++;
      
  }
  
  return (count1 == 0 || count4 == 0) ; 
 }

console.log(no14([1, 2, 3]) ); //true
console.log(no14([1, 2, 3, 4]) ); //false
console.log(no14([2, 3, 4]) ); //true
console.log();

console.log(no14([1, 1, 4, 4]) ); //false
console.log(no14([2, 2, 4, 4])); //true
console.log(no14([2, 3, 4, 1])  ); //false
console.log();

console.log(no14([2, 1, 1]) ); // true
console.log(no14([1, 4]) ); //false
console.log(no14([2]) ); //true
console.log();

console.log(no14([2, 1])); //true
console.log(no14([1])  ); //true
console.log();

console.log(no14([4]) ); // true
console.log(no14([]) ); //true
console.log(no14([1,1,1,1]) ); // true
console.log();

console.log(no14([9,4,4,1]) ); //false
console.log(no14([4,2,3,1]) ); // false
console.log(no14([4,2,3,5]) ); //true
console.log();

console.log(no14([4,4,2]) ); // true
console.log(no14([1,4,4]) ); //false
