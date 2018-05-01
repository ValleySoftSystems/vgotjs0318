/* 
Problem:
	Given a number n, create and return a new string array of length n, containing the strings "0", "1" "2" .. through n-1. N may be 0, in which case just return a length 0 array. Note: String.valueOf(xxx) will make the String form of most types. The syntax to make a new string array is: new String[desired_length]  

Notes:
	create an empty array
	create a loop to run till given number(array length) and create elements from 0 to n.
	convert the value to a string.
	return the array
*/

function fizzArray2 (n) {
  
  var nums = new Array();
  
  for (var i = 0; i < n; i++) {
  
      nums[i] = i;
      nums[i] = nums[i].toString();
  }
  return nums ; //return nums.toString().split("");
 }

console.log(fizzArray2(4) ); //["0", "1", "2", "3"]
console.log(fizzArray2(10) ); //["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
console.log(fizzArray2(2) ); //["0", "1"]
console.log();

console.log(fizzArray2(1) ); //→ ["0"]
console.log(fizzArray2(0)); //[]
console.log(fizzArray2(7) ); //["0", "1", "2", "3", "4", "5", "6"]
console.log();

console.log(fizzArray2(9) ); // ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
console.log(fizzArray2(11) ); //["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
