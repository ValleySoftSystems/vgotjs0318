function countEvens(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 == 0) count++;
    }
  return count;
}

console.log(countEvens([2, 1, 2, 3, 4])); // 3
console.log(countEvens([2, 2, 0])); // 3
console.log(countEvens([1, 3, 5])); // 0
console.log(countEvens([])); // 0
console.log(countEvens([11, 9, 0, 1])); // 1
console.log(countEvens([2, 11, 9, 0])); // 2
console.log(countEvens([2])); // 1
console.log(countEvens([2, 5, 12])); // 2