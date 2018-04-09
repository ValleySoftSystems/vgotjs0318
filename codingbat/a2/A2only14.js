function only14(arr) {
   for(var i=0; i<arr.length; i++){
       if(arr[i]!=1 && arr[i]!=4 ) return false;
   }
return true;
}

console.log(only14([1, 4, 1, 4])); // true
console.log(only14([1, 4, 2, 4])); // false
console.log(only14([1, 1])); // true
console.log(only14([4, 1])); // true
console.log(only14([2])); // false
console.log(only14([])); // true
console.log(only14([1, 4, 1, 3])); // false
console.log(only14([3, 1, 3])); // false
console.log(only14([1])); // true
console.log(only14([4])); // true
console.log(only14([3, 4])); // false
console.log(only14([1, 3, 4])); // false
console.log(only14([1, 1, 1])); // true
console.log(only14([1, 1, 1, 5])); // false
console.log(only14([4, 1, 4, 1])); // true















