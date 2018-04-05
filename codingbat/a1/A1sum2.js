function sum2(arr) {
    if (arr.length == 0) return 0;
    if(arr.length == 1 ) return arr[0];
    return arr[0] + arr[1];
}

console.log(sum2([1, 2, 3])); // 3
console.log(sum2([1, 1])); // 2
console.log(sum2([1, 1, 1, 1])); // 2
console.log(sum2([1, 2])); // 3
console.log(sum2([1])); // 1
console.log(sum2([])); // 0
console.log(sum2([4, 5, 6])); // 9
console.log(sum2([4])); // 4
