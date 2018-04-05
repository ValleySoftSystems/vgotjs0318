
function maxEnd3(arr) {
    let maxFirstOrLast = Math.max(arr[0], arr[arr.length-1]);
    return arr.fill(maxFirstOrLast, 0, arr.length)
}

console.log(maxEnd3([1, 2, 3]));  // → [3, 3, 3]
console.log(maxEnd3([11, 5, 9]));  // → [11, 11, 11]
console.log(maxEnd3([2, 11, 3]));  // → [3, 3, 3]

console.log(maxEnd3([]));
console.log(maxEnd3([1]));
console.log(maxEnd3(["a"]));
