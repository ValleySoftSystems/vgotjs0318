function sameFirstLast(arr){
 return (arr.length>=1) && (arr[0] == arr[arr.length-1]);
}

console.log(sameFirstLast([1, 2, 3])); // false
console.log(sameFirstLast([1, 2, 3, 1])); // true
console.log(sameFirstLast([1, 2, 1])); // true
console.log(sameFirstLast([7])); // true
console.log(sameFirstLast([])); // false
console.log(sameFirstLast([1, 2, 3, 4, 5, 1])); // true
console.log(sameFirstLast([1, 2, 3, 4, 5, 13])); // false
console.log(sameFirstLast([13, 2, 3, 4, 5, 13])); // true
console.log(sameFirstLast([7, 7])); // true