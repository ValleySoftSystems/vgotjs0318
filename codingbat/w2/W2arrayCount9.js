
function arrayCount9(arr) {
    var count = 0;
    for(i=0; i<=arr.length; i++){
        if(arr[i] == 9){
            count++;
        }
        //return 0;
    }
    return count;
}

console.log(arrayCount9([1, 2, 9]) );
console.log(arrayCount9([1, 9, 9]) );
console.log(arrayCount9([1, 9, 9, 3, 9]) );
console.log(arrayCount9([1, 2, 3]) );
console.log(arrayCount9([]) );
console.log(arrayCount9([4, 2, 4, 3, 1]) );
console.log(arrayCount9([9, 2, 4, 3, 1]) );