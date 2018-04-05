function no23(arr) {
    return !(arr.includes(2) || arr.includes(3));
}

console.log(no23([4, 5])); // true
console.log(no23([4, 2])); // false
console.log(no23([3, 5])); // false
console.log(no23([1, 9])); // true
console.log(no23([2, 9])); // false
console.log(no23([1, 3])); // false
console.log(no23([1, 1])); // true
console.log(no23([2, 2])); // false
console.log(no23([3, 3])); // false
console.log(no23([7, 8])); // true
console.log(no23([8, 7])); // true

