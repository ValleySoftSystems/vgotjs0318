function array667(arr) {
    var count =0;
    for(var i=0; i<arr.length-1; i++){
        if((arr[i]==6) && (arr[i+1==6] || arr[i+1]==7)){
            count++;
        }
    }
    return count;

}

console.log(array667([6, 6, 2]));
console.log(array667([6, 6, 2, 6]));
console.log(array667([6, 7, 2, 6]));
console.log(array667([6, 6, 2, 6, 7]));
console.log(array667([1, 6, 3]));
console.log(array667([6, 1]));
console.log(array667([]));
console.log(array667([3, 6, 7, 6]) );
console.log(array667([3, 6, 6, 7]));
console.log(array667([6, 3, 6, 6]));
console.log(array667([6, 7, 6, 6]));
console.log(array667([1, 2, 3, 5, 6]));
console.log(array667([1, 2, 3, 6, 6]));

