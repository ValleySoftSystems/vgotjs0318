function fix23(arr) {
    var idx2 = arr.indexOf(2);

    if((arr[idx2+1]) == 2){
        arr[idx2+2]= 0;
    }
    if(arr.indexOf(3) == idx2+1){
        arr[arr.indexOf(3)] = 0;
    }
return arr;
}

console.log(fix23([1, 2, 3])); // [1, 2, 0]
console.log(fix23([2, 3, 5])); // [2, 0, 5]
console.log(fix23([1, 2, 1])); // [1, 2, 1]
console.log(fix23([3, 2, 1])); // [3, 2, 1]
console.log(fix23([2, 2, 3])); // [2, 2, 0]
console.log(fix23([2, 3, 3])); // [2, 0, 3]




