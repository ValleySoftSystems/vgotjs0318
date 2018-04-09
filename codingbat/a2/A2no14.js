function no14(arr) {
    return ((!arr.includes(1) || !arr.includes(4)));
}

console.log(no14([1, 2, 3])); // true
console.log(no14([1, 2, 3, 4])); // false
console.log(no14([2, 3, 4])); // true
console.log(no14([1, 1, 4, 4])); // false
console.log(no14([2, 2, 4, 4])); // true
console.log(no14([2, 3, 4, 1])); // false
console.log(no14([2, 1, 1])); // true
console.log(no14([1, 4])); // false
console.log(no14([2])); // true
console.log(no14([2, 1])); // true
console.log(no14([1])); // true
console.log(no14([4])); // true
console.log(no14([])); // true
console.log(no14([1, 1, 1, 1])); // true
console.log(no14([9, 4, 4, 1])); // false
console.log(no14([4, 2, 3, 1])); // false
console.log(no14([4, 2, 3, 5])); // true
console.log(no14([4, 4, 2])); // true
console.log(no14([1, 4, 4])); // false











