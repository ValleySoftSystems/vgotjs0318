function has23(arr) {
    return arr.includes(2) || arr.includes(3);
}


console.log(has23([2, 5])); // true
console.log(has23([4, 3])); // true
console.log(has23([4, 5])); // false
console.log(has23([2, 2])); // true
console.log(has23([3, 2])); // true
console.log(has23([3, 3])); // true
console.log(has23([7, 7])); // false
console.log(has23([3, 9])); // true
console.log(has23([9, 5])); // false


