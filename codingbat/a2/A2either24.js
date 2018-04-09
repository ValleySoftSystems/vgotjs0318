function either24(arr) {
    var count1 = 0;
    var count2 = 0;
    for(var i=0; i<arr.length; i++){
        if (arr[i]==2 && arr[i+1]==2) count1++;
        if (arr[i]==4 && arr[i+1]==4) count2++;
    }
return !(count1 == count2);
}

//console.log(either24([4, 4, 1, 2, 2]));

console.log(either24([1, 2, 2])); // true
console.log(either24([4, 4, 1])); // true
console.log(either24([4, 4, 1, 2, 2])); // false
console.log(either24([1, 2, 3, 4])); // false
console.log(either24([3, 5, 9])); // false
console.log(either24([1, 2, 3, 4, 4])); // true
console.log(either24([2, 2, 3, 4])); // true
console.log(either24([1, 2, 3, 2, 2, 4])); // true
console.log(either24([1, 2, 3, 2, 2, 4, 4])); // false
console.log(either24([1, 2])); // false
console.log(either24([2, 2])); // true
console.log(either24([4, 4])); // true
console.log(either24([2])); // false
console.log(either24([])); // false
















