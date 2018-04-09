function fizzArray(n) {
    var arr = [];
    for(var i=0; i<n; i++){
      arr.push(i);
    }
  return arr;
}

console.log(fizzArray(4)); // [0, 1, 2, 3]
console.log(fizzArray(1)); // [0]
console.log(fizzArray(10)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(fizzArray(0)); // []
console.log(fizzArray(2)); // [0, 1]
console.log(fizzArray(7)); // [0, 1, 2, 3, 4, 5, 6]