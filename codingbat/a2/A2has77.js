function has77(arr) {
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] == 7 && arr[i + 1] == 7) || (arr[i] == 7 && arr[i + 2] == 7)) {
            return true;
        }
    }
return false;
}

console.log(has77([1, 7, 7])); // true
console.log(has77([1, 7, 1, 7])); // true
console.log(has77([1, 7, 1, 1, 7])); // false
console.log(has77([7, 7, 1, 1, 7])); // true
console.log(has77([2, 7, 2, 2, 7, 2])); // false
console.log(has77([2, 7, 2, 2, 7, 7])); // true
console.log(has77([7, 2, 7, 2, 2, 7])); // true
console.log(has77([7, 2, 6, 2, 2, 7])); // false
console.log(has77([7, 7, 7])); // true
console.log(has77([7, 1, 7])); // true
console.log(has77([7, 1, 1])); // false
console.log(has77([1, 2])); // false
console.log(has77([1, 7])); // false
console.log(has77([7])); // false
















