/* 
Problem:
  Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.
*/

function make2 (numA, numB) {
  
   
  var res = new Array(2);
  
  if (numA.length == 0) {
        res[0] = numB[0];
        res[1] = numB[1];
    } else if (numA.length == 1) {
        res[0] = numA[0];
        res[1] = numB[0];
    } else {
        res[0] = numA[0];
        res[1] = numA[1];
    }
    return res;
     
  return isUnLucky;   
}


console.log(make2([4, 5], [1, 2, 3]) ); // [4, 5]
console.log(make2([4], [1, 2, 3]) ); // [4, 1]
console.log(make2([], [1, 2]) ); // [1, 2]
console.log();

console.log(make2([1, 2], []) ); // [1, 2]
console.log(make2([3], [1, 2, 3]) ); // [3, 1]
console.log(make2([3], [1]) ); // [3, 1]
console.log();

console.log(make2([3, 1, 4], []) ); // [3, 1]
console.log(make2([1], [1]) ); // [1, 1]
console.log(make2([1, 2, 3], [7, 8]) ); // [1, 2]
console.log();

console.log(make2([7, 8], [1, 2, 3]) ); // [7, 8]
console.log(make2([7], [1, 2, 3]) ); // [7, 1]
console.log(make2([5, 4], [2, 3, 7]) ); // [5, 4]



  

