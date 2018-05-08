/* 
Problem:
	Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.
*/
function front11 (numA, numB) {
  
   
  var res = new Array();
  
  if(numA.length == 0 ){
    res[0] = numB[0];
  } else if(numB.length == 0) {
    res[0] = numA[0];
  }  else {
      res[0] = numA[0];
      res[1] = numB[0];
  } 
    
  
  
  return res;
     
 
}


console.log(front11([1, 2, 3], [7, 9, 8]) ); // [1, 7]
console.log(front11([1], [2]) ); // [1, 2]
console.log(front11([1, 7], []) ); // [1]
console.log();

console.log(front11([], [2, 8]) ); // [2]
console.log(front11([], []) ); // []
console.log(front11([3], [1, 4, 1, 9]) ); // [3, 1]
console.log();

console.log(front11([1, 4, 1, 9], []) ); // [1]
