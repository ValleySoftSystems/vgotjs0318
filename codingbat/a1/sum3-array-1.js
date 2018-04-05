
function sum3(arr) {
  return (arr.reduce((a,l) => a+l));
}

console.log(sum3([1, 2, 3]));  //→ 6
console.log(sum3([5, 11, 2])); // → 18
console.log(sum3([7, 0, 0]));  // → 7