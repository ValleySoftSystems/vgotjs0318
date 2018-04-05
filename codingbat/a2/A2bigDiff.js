function bigDiff(arr) {
    return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

console.log(bigDiff([10, 3, 5, 6])); // 7
console.log(bigDiff([7, 2, 10, 9])); // 8
console.log(bigDiff([2, 10, 7, 2])); // 8
console.log(bigDiff([2, 10])); // 8
console.log(bigDiff([10, 2])); // 8
console.log(bigDiff([10, 0])); // 10
console.log(bigDiff([2, 3])); // 1
console.log(bigDiff([2, 2])); // 0
console.log(bigDiff([2])); // 0
console.log(bigDiff([5, 1, 6, 1, 9, 9])); // 8
console.log(bigDiff([7, 6, 8, 5])); // 3
console.log(bigDiff([7, 7, 6, 8, 5, 5, 6])); // 3
