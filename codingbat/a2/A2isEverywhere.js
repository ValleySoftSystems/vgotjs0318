function isEverywhere(arr, val) {
    for(var i=0; i<arr.length-1; i++){
        if(arr[i]!=val && arr[i+1] !=val) return false;
    }
return true;
}



console.log(isEverywhere([1, 2, 1, 3], 1)); // true
console.log(isEverywhere([1, 2, 1, 3], 2)); // false
console.log(isEverywhere([1, 2, 1, 3, 4], 1)); // false
console.log(isEverywhere([2, 1, 2, 1], 1)); // true
console.log(isEverywhere([2, 1, 2, 1], 2)); // true
console.log(isEverywhere([2, 1, 2, 3, 1], 2)); // false
console.log(isEverywhere([3, 1], 3)); // true
console.log(isEverywhere([3, 1], 2)); // false
console.log(isEverywhere([3], 1)); // true
console.log(isEverywhere([], 1)); // true
console.log(isEverywhere([1, 2, 1, 2, 3, 2, 5], 2)); // true
console.log(isEverywhere([1, 2, 1, 1, 1, 2], 2)); // false
console.log(isEverywhere([2, 1, 2, 1, 1, 2], 2)); // false
console.log(isEverywhere([2, 1, 2, 2, 2, 1, 1, 2], 2)); // false
console.log(isEverywhere([2, 1, 2, 2, 2, 1, 2, 1], 2)); // true
console.log(isEverywhere([2, 1, 2, 1, 2], 2)); // true




