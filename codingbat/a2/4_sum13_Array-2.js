/* 
Problem:
	Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

Notes:
	loop through array, when ith element is equal to 13, increment i by 2;
	otherwise add ith elemnt to sum and increment i by 1.

	retun sum.
*/

function sum13 (nums) {

  var sum = 0;
  var i = 0;
  
  while ( i < nums.length) {

      if(nums[i] == 13) {
        i = i + 2;
      } else {
        sum += nums[i];
        i++ ;
      }
  }
    
  return sum;
}



console.log(sum13([1, 2, 2, 1])); // 6
console.log(sum13([1, 1])); // 2
console.log(sum13([1, 2, 2, 1, 13])); //6
console.log();

console.log(sum13([1, 2, 13, 2, 1, 13])); //4
console.log(sum13([13, 1, 2, 13, 2, 1, 13])); //3
console.log(sum13([])); //0
console.log();

console.log(sum13([13]) ); //0
console.log(sum13([13, 13])); //0
console.log(sum13([13, 0, 13])); //0
console.log();

console.log(sum13([13, 1, 13]) );//0
console.log(sum13([5, 7, 2])); //14
console.log(sum13([5, 13, 2]));//5
console.log();

console.log(sum13([0]) ); //0
console.log(sum13([13, 0]));//0

