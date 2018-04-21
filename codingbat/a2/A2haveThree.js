function haveThree(arr) {
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]==3 && arr[i+1]==3) return false;
        if(arr[i]==3) count++;
    }
return count==3;
}

console.log(haveThree([3, 1, 3, 1, 3])); // true
console.log(haveThree([3, 1, 3, 3])); // false
console.log(haveThree([3, 4, 3, 3, 4])); // false
console.log(haveThree([1, 3, 1, 3, 1, 2])); // false
console.log(haveThree([1, 3, 1, 3, 1, 3])); // true
console.log(haveThree([1, 3, 3, 1, 3])); // false
console.log(haveThree([1, 3, 1, 3, 1, 3, 4, 3])); // false
console.log(haveThree([3, 4, 3, 4, 3, 4, 4])); // true
console.log(haveThree([3, 3, 3])); // false
console.log(haveThree([1, 3])); // false
console.log(haveThree([3])); // false
console.log(haveThree([1])); // false


















