function makeLast(arr) {
    var newArr = [];
    newArr.length = 2*arr.length;
    for(var i=0; i<newArr.length-1;i++){
        newArr[i]=0;
    }
    newArr[newArr.length-1] = arr[arr.length-1];
    return newArr;
}

console.log(makeLast([4, 5, 6])); // [0, 0, 0, 0, 0, 6]
console.log(makeLast([1, 2])); // [0, 0, 0, 2]
console.log(makeLast([3])); // [0, 3]
console.log(makeLast([0])); // [0, 0]
console.log(makeLast([7, 7, 7])); // [0, 0, 0, 0, 0, 7]
console.log(makeLast([3, 1, 4])); // [0, 0, 0, 0, 0, 4]
console.log(makeLast([1, 2, 3, 4])); // [0, 0, 0, 0, 0, 0, 0, 4]
console.log(makeLast([1, 2, 3, 0])); // [0, 0, 0, 0, 0, 0, 0, 0]
console.log(makeLast([2, 4])); // [0, 0, 0, 4]



