function biggerTwo(a,b) {
   if(a[0]+a[1] == b[0]+b[1]) return a;
   return a[0]+a[1] > b[0]+b[1]? a : b;
}

console.log(biggerTwo([1, 2], [3, 4])); // [3, 4]
console.log(biggerTwo([3, 4], [1, 2])); // [3, 4]
console.log(biggerTwo([1, 1], [1, 2])); // [1, 2]
console.log(biggerTwo([2, 1], [1, 1])); // [2, 1]
console.log(biggerTwo([2, 2], [1, 3])); // [2, 2]
console.log(biggerTwo([1, 3], [2, 2])); // [1, 3]
console.log(biggerTwo([6, 7], [3, 1])); // [6, 7]





