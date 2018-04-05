function commonEnd(arr1, arr2){
    return (arr1[0] == arr2[0]) || (arr1[arr1.length-1] == arr2[arr2.length-1]);
}

console.log(commonEnd([1, 2, 3], [7, 3])); // true
console.log(commonEnd([1, 2, 3], [7, 3, 2])); // false
console.log(commonEnd([1, 2, 3], [1, 3])); // true
console.log(commonEnd([1, 2, 3], [1])); // true
console.log(commonEnd([1, 2, 3], [2])); // false