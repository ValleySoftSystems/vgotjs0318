
function makeLast(arr) {
   if (Array.isArray(arr) && arr.length>=1) {
     var newArr = new Array(arr.length * 2);
     return (newArr.fill(0, 0, newArr.length-1) + arr.pop());
   } 
   return false;
}

console.log(makeLast([4, 5, 6]));  // → [0, 0, 0, 0, 0, 6]
console.log(makeLast([1, 2]));  // → [0, 0, 0, 2]
console.log(makeLast([3]));  // → [0, 3]
console.log(makeLast([]));
console.log(makeLast({}));
console.log(makeLast([1]));
console.log(makeLast(["a"]));
 