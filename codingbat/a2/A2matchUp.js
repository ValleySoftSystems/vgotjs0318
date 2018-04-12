function matchUp(arr1, arr2) {
    var count = 0;
    for(var i=0; i<arr1.length; i++){
       if(((Math.abs(arr1[i] - arr2[i])) <= 2 ) && (arr1[i] != arr2[i]) ) {
           count++;
       }
    }
  return count;
}

console.log(matchUp([1, 2, 3], [2, 3, 10])); // 2
console.log(matchUp([1, 2, 3], [2, 3, 5])); // 3
console.log(matchUp([1, 2, 3], [2, 3, 3])); // 2
console.log(matchUp([5, 3], [5, 5])); // 1
console.log(matchUp([5, 3], [4, 4])); // 2
console.log(matchUp([5, 3], [3, 3])); // 1
console.log(matchUp([5, 3], [2, 2])); // 1
console.log(matchUp([5, 3], [1, 1])); // 1
console.log(matchUp([5, 3], [0, 0])); // 0
console.log(matchUp([4], [4])); // 0
console.log(matchUp([4], [5])); // 1



















