/* 
Problem:
  Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.

Notes:
  
  loop through the array
  	check if the value at ith index with 3, if yes check value at i+1 to be not 3.
  	if both conditions are met , increment count.
 check count to be 3, return true if yes, otherwise return false.

  
*/

function haveThree (nums) {
 
  var count3 = 0;
  
  for(var i = 0; i < nums.length ; i++) {
     
    
    if ((nums[i] == 3) && (nums[i + 1] != 3) ) {
            
            count3++;
    }
  }
  return (count3 == 3);
}



console.log(haveThree([3, 1, 3, 1, 3]) ); // true
console.log(haveThree([3, 1, 3, 3]) ); // false
console.log(haveThree([3, 4, 3, 3, 4]) ); // false
console.log();

console.log(haveThree([1, 3, 1, 3, 1, 2]) ); // false
console.log(haveThree([1, 3, 1, 3, 1, 3]) ); // true
console.log(haveThree([1, 3, 3, 1, 3]) ); // false
console.log();

console.log(haveThree([1, 3, 1, 3, 1, 3, 4, 3]) ); // false
console.log(haveThree([3, 4, 3, 4, 3, 4, 4]) ); // true
console.log(haveThree([3, 3, 3]) ); // false
console.log();

console.log(haveThree([1, 3]) ); // false
console.log(haveThree([3]) ); // false
console.log(haveThree([1]) ); // false





