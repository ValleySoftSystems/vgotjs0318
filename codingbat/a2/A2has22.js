function has22(arr) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i] == 2 && arr[i + 1] == 2) return true;
    }
    return false;
}

console.log(has22([1, 2, 2])); // true
console.log(has22([1, 2, 1, 2])); // false
console.log(has22([2, 1, 2])); // false
console.log(has22([2, 2, 1, 2])); // true
console.log(has22([1, 3, 2])); // false
console.log(has22([1, 3, 2, 2])); // true
console.log(has22([2, 3, 2, 2])); // true
console.log(has22([4, 2, 4, 2, 2, 5])); // true
console.log(has22([1, 2])); // false
console.log(has22([2, 2])); // true
console.log(has22([2])); // false
console.log(has22([])); // false
console.log(has22([3, 3, 2, 2])); // true
console.log(has22([5, 2, 5, 2])); // false










