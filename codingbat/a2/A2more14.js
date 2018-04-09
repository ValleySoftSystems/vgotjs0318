function more14(arr) {
    var count1 = 0;
    var count2 = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]==1) count1++;
        if(arr[i]==4) count2++;
    }
 return (count1>count2);
}

console.log(more14([1, 4, 1])); // true
console.log(more14([1, 4, 1, 4])); // false
console.log(more14([1, 1])); // true
console.log(more14([1, 6, 6])); // true
console.log(more14([1])); // true
console.log(more14([1, 4])); // false
console.log(more14([6, 1, 1])); // true
console.log(more14([1, 6, 4])); // false
console.log(more14([1, 1, 4, 4, 1])); // true
console.log(more14([1, 1, 6, 4, 4, 1])); // true
console.log(more14([])); // false
console.log(more14([4, 1, 4, 6])); // false
console.log(more14([4, 1, 4, 6, 1])); // false
console.log(more14([1, 4, 1, 4, 1, 6])); // true










