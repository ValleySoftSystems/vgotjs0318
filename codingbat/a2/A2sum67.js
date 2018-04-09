function sum67(arr) {
    var sum =0 ;
    for(var i=0; i<arr.length;i++){
        if(arr[i]!==6) {
            sum += arr[i]
        }else{
            while(arr[i]!=7) i++;
        }
    }
return sum;
}

console.log(sum67([1, 2, 2])); // 5
console.log(sum67([1, 2, 2, 6, 99, 99, 7])); // 5
console.log(sum67([1, 1, 6, 7, 2])); // 4
console.log(sum67([1, 6, 2, 2, 7, 1, 6, 99, 99, 7])); // 2
console.log(sum67([1, 6, 2, 6, 2, 7, 1, 6, 99, 99, 7])); // 2
console.log(sum67([2, 7, 6, 2, 6, 7, 2, 7])); // 18
console.log(sum67([2, 7, 6, 2, 6, 2, 7])); // 9
console.log(sum67([1, 6, 7, 7])); // 8
console.log(sum67([6, 7, 1, 6, 7, 7])); // 8
console.log(sum67([6, 8, 1, 6, 7])); // 0
console.log(sum67([])); // 0
console.log(sum67([6, 7, 11])); // 11
console.log(sum67([11, 6, 7, 11])); // 22
console.log(sum67([2, 2, 6, 7, 7])); // 11










