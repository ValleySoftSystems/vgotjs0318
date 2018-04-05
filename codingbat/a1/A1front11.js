function front11(arr1, arr2) {
   if((arr1.length == 0)&& (arr2.length == 0)) return [];
   if(arr1.length == 0) return [arr2[0]];
   if(arr2.length == 0)return [arr1[0]];
    return [arr1[0], arr2[0]];
}

console.log(front11([1, 2, 3], [7, 9, 8])); // [1, 7]
console.log(front11([1], [2])); // [1, 2]
console.log(front11([1, 7], [])); // [1]
console.log(front11([], [2, 8])); // [2]
console.log(front11([], [])); // []
console.log(front11([3], [1, 4, 1, 9])); // [3, 1]
console.log(front11([1, 4, 1, 9], [])); // [1]





