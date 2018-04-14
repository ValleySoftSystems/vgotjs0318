function modThree(arr) {
    for(var i=0; i<arr.length-2; i++){
        if ((arr[i]%2 !== 0 && arr[i+1]%2 !== 0 && arr[i+2]%2 !== 0) ||
            (arr[i]%2 == 0 && arr[i+1]%2 == 0 && arr[i+2]%2 == 0) ) return true;
    }
return false;
}

console.log(modThree([2, 1, 3, 5])); // true
console.log(modThree([2, 1, 2, 5])); // false
console.log(modThree([2, 4, 2, 5])); // true
console.log(modThree([1, 2, 1, 2, 1])); // false
console.log(modThree([9, 9, 9])); // true
console.log(modThree([1, 2, 1])); // false
console.log(modThree([1, 2])); // false
console.log(modThree([1])); // false
console.log(modThree([])); // false
console.log(modThree([9, 7, 2, 9])); // false
console.log(modThree([9, 7, 2, 9, 2, 2])); // false
console.log(modThree([9, 7, 2, 9, 2, 2, 6])); // true


















