
function findLength(arr) {
    return arr.reduce((combo, currElem) => combo + currElem); 
}

function biggerTwo(arr1, arr2) {
   if (Array.isArray(arr1) && Array.isArray(arr2)) {
   return (findLength(arr2) > findLength(arr1) ? arr2 : arr1);
   } 
  
   //return false;
}

console.log(biggerTwo([1, 2], [3, 4]));  // → [3, 4]
console.log(biggerTwo([3, 4], [1, 2]));  // → [3, 4]
console.log(biggerTwo([1, 1], [1, 2]));  //→ [1, 2] 

console.log(biggerTwo([5, 1], [1, 5]));  //→ [1, 2] 