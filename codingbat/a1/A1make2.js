function make2(arr1, arr2) {
    if(arr1.length == 0) return [arr2[0],arr2[1]];
    if(arr1.length == 1) return [arr1[0],arr2[0]];
    if(arr1.length>=2) return [arr1[0],arr1[1]];
}

console.log(make2([4, 5], [1, 2, 3])); // [4, 5]
console.log(make2([4], [1, 2, 3])); // [4, 1]
console.log(make2([], [1, 2])); // [1, 2]
console.log(make2([1, 2], [])); // [1, 2]
console.log(make2([3], [1, 2, 3])); // [3, 1]
console.log(make2([3], [1])); // [3, 1]
console.log(make2([3, 1, 4], [])); // [3, 1]
console.log(make2([1], [1])); // [1, 1]
console.log(make2([1, 2, 3], [7, 8])); // [1, 2]
console.log(make2([7, 8], [1, 2, 3])); // [7, 8]
console.log(make2([7], [1, 2, 3])); // [7, 1]
console.log(make2([5, 4], [2, 3, 7])); // [5, 4]
