function sum28(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]==2) sum += arr[i];
    }
    return (sum == 8);
}

console.log(sum28([2, 3, 2, 2, 4, 2])); // true
console.log(sum28([2, 3, 2, 2, 4, 2, 2])); // false
console.log(sum28([1, 2, 3, 4])); // false
console.log(sum28([2, 2, 2, 2])); // true
console.log(sum28([1, 2, 2, 2, 2, 4])); // true
console.log(sum28([])); // false
console.log(sum28([2])); // false
console.log(sum28([8])); // false
console.log(sum28([2, 2, 2])); // false
console.log(sum28([2, 2, 2, 2, 2])); // false
console.log(sum28([1, 2, 2, 1, 2, 2])); // true
console.log(sum28([5, 2, 2, 2, 4, 2])); // true












