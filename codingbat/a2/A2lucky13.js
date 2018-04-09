function lucky13(arr) {
    return (!(arr.includes(1) || arr.includes(3)));
}

console.log(lucky13([0, 2, 4])); // true
console.log(lucky13([1, 2, 3])); // false
console.log(lucky13([1, 2, 4])); // false
console.log(lucky13([2, 7, 2, 8])); // true
console.log(lucky13([2, 7, 1, 8])); // false
console.log(lucky13([3, 7, 2, 8])); // false
console.log(lucky13([2, 7, 2, 1])); // false
console.log(lucky13([1, 2])); // false
console.log(lucky13([2, 2])); // true
console.log(lucky13([2])); // true
console.log(lucky13([3])); // false
console.log(lucky13([])); // true












