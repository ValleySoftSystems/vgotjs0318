/*
Problem:
Given an array of ints length 3, return the sum of all the elements.
*/
function sum3 (nums) {
  var sum = 0;
  
  for(var i = 0; i < nums.length;i++) {
    sum += nums[i];
  }
  return sum;
}


console.log(sum3([1, 2, 3]) ); // 6
console.log(sum3([5, 11, 2]) ); // 18
console.log(sum3([7, 0, 0]) ); // 7
console.log(sum3([1, 2, 1]) ); // 4
console.log(sum3([1, 1, 1]) ); // 3