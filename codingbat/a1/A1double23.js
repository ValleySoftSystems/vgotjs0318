function double23(arr) {
    return ((arr[0]==2 && arr[1]==2) || (arr[0]==3 && arr[1]==3));
}

console.log(double23([2, 2])); // true
console.log(double23([3, 3])); // true
console.log(double23([2, 3])); // false
console.log(double23([3, 2])); // false
console.log(double23([4, 5])); // false
console.log(double23([2])); // false
console.log(double23([3])); // false
console.log(double23([])); // false
console.log(double23([3, 4])); // false




