function has12(arr) {
    return (arr.lastIndexOf(2) > Math.abs(arr.lastIndexOf(1)));
}

console.log(has12([1, 3, 2])); // true
console.log(has12([3, 1, 2])); // true
console.log(has12([3, 1, 4, 5, 2])); // true
console.log(has12([3, 1, 4, 5, 6])); // false
console.log(has12([3, 1, 4, 1, 6, 2])); // true
console.log(has12([2, 1, 4, 1, 6, 2])); // true
console.log(has12([2, 1, 4, 1, 6])); // false
console.log(has12([1])); // false
console.log(has12([2, 1, 3])); // false
console.log(has12([2, 1, 3, 2])); // true
console.log(has12([2])); // false
console.log(has12([3, 2])); // false
console.log(has12([3, 1, 3, 2])); // true
console.log(has12([3, 5, 9])); // false
console.log(has12([3, 5, 1])); // false
console.log(has12([3, 2, 1])); // false
console.log(has12([1, 2])); // true













