/* 
Problem:
	Given an array of ints, return true if the number of 1's is greater than the number of 4's

Notes:
	increment count of 1 if value at ith index is 1
	increment count of 4 if value at ith index is 4
	compare both counts and return true if count of 1s is greater than count of 4s.
*/


function more14 (nums) {
  
  var count1 = 0, count4 = 0;
  
  for (var i = 0; i < nums.length; i++) {
  
      if(nums[i] == 1 )        
        count1 ++;
      if (nums[i] == 4)
        count4++;
  }
  return count1 > count4 ? true : false ;
 }

console.log(more14([1, 4, 1]) ); //true
console.log(more14([1, 4, 1, 4]) ); //false
console.log(more14([1, 1]) ); //true
console.log();

console.log(more14([1, 6, 6])); //true
console.log(more14([1])); //true
console.log(more14([1, 4]) ); //false
console.log();

console.log(more14([6, 1, 1]) ); //true
console.log(more14([1, 6, 4]) ); //false
console.log(more14([1, 1, 4, 4, 1])); //true
console.log();

console.log(more14([1, 1, 6, 4, 4, 1])); //true
console.log(more14([])  ); //false
console.log(more14([4, 1, 4, 6])); //false
console.log();

console.log(more14([4, 1, 4, 6, 1]) ); //false
console.log(more14([1, 4, 1, 4, 1, 6]));//true