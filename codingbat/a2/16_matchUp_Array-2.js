/* 
Problem:
	Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal.

Notes:
	loop through array 
	check the differnce between values to be <=2 and values should not be equal
	if yes increment count and return it.
*/

function matchUp (numsA, numsB) {
  
  
  var count = 0;
  
  for (var i = 0; i < numsA.length; i++) {
    
     if( (Math.abs((numsA[i] - numsB[i] )) <= 2) && (numsA[i]!=numsB[i])) {
         count++;
         
       }
       
    } 
        
  return count;
}

console.log(matchUp([1, 2, 3], [2, 3, 10]) ); //2
console.log(matchUp([1, 2, 3], [2, 3, 5])); //3
console.log(matchUp([1, 2, 3], [2, 3, 3])); //2
console.log();

console.log(matchUp([5, 3], [5, 5]) ); //1
console.log(matchUp([5, 3], [4, 4])); //2         
console.log(matchUp([5, 3], [3, 3])  ); //1
console.log();

console.log(matchUp([5, 3], [2, 2])  ); //1
console.log(matchUp([5, 3], [1, 1]) ); //1
console.log(matchUp([5, 3], [0, 0])); //0
console.log();

console.log(matchUp([4], [4])); // 0
console.log(matchUp([4], [5])); //1

