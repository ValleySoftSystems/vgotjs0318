function rightDigit(list) {
    return list.map(x => x%10);
}

console.log(rightDigit([1, 22, 93])); // [1, 2, 3]
console.log(rightDigit([16, 8, 886, 8, 1])); // [6, 8, 6, 8, 1]
console.log(rightDigit([10, 0])); // [0, 0]
console.log(rightDigit([])); // []
console.log(rightDigit([5, 10])); // [5, 0]
console.log(rightDigit([5, 50, 500, 5000, 5000])); // [5, 0, 0, 0, 0]
console.log(rightDigit([6, 23, 12, 23, 4, 1, 19, 1119, 2, 3, 2])); // [6, 3, 2, 3, 4, 1, 9, 9, 2, 3, 2]
