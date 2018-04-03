function arrayFront9(arr) {
    var end = arr.length;
    if(end >4) end =4;
    for(var i=0; i<end; i++){
        if(arr[i]==9) return true;
    }
    return false;

}

console.log(arrayFront9([1, 2, 9, 3, 4]));
console.log(arrayFront9([1, 2, 3, 4, 9]) );
console.log(arrayFront9([1, 2, 3, 4, 5]));
console.log(arrayFront9([9, 2, 3]));
console.log(arrayFront9([1, 9, 9]));
console.log(arrayFront9([1, 2, 3]));
console.log(arrayFront9([1, 9]));
console.log(arrayFront9([5, 5]));
console.log(arrayFront9([2]));
console.log(arrayFront9([9]));
console.log(arrayFront9([]));
console.log(arrayFront9([3, 9, 2, 3, 3]) );