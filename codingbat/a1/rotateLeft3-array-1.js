
function rotateLeft3(arr) {
   arr.length>=1 && arr.push(arr.shift());
   return arr;
}

console.log(rotateLeft3([1, 2, 3]));  // → [2, 3, 1]
console.log(rotateLeft3([5, 11, 9]));  // → [11, 9, 5]
console.log(rotateLeft3([7, 0, 0]));  // → [0, 0, 7]

console.log(rotateLeft3([]));
console.log(rotateLeft3({}));
console.log(rotateLeft3([1]));
console.log(rotateLeft3(["a"]));