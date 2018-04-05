function makeEnds(arr) {
    return [arr[0], arr[arr.length-1]];
}

console.log(makeEnds([1, 2, 3])); // [1, 3]
console.log(makeEnds([1, 2, 3, 4])); // [1, 4]
console.log(makeEnds([7, 4, 6, 2])); // [7, 2]
console.log(makeEnds([1, 2, 2, 2, 2, 2, 2, 3])); // [1, 3]
console.log(makeEnds([7, 4])); // [7, 4]
console.log(makeEnds([7])); // [7, 7]
console.log(makeEnds([5, 2, 9])); // [5, 9]
console.log(makeEnds([2, 3, 4, 1])); // [2, 1]




