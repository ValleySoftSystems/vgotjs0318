function noTriples(arr) {
  for (let i=0; i<arr.length-1; i++) {
      let val = arr[i];
      if ((arr[i+1] === val) && (arr[i+2] === val))
        return false;     
  }
  return true;
}

console.log(noTriples([1, 1, 2, 2, 1])); // → true
console.log(noTriples([1, 1, 2, 2, 2, 1])); // → false
console.log(noTriples([1, 1, 1, 2, 2, 2, 1])); // → false
console.log(noTriples([1, 1, 1])); // → false
console.log(noTriples([1, 1])); // → true
console.log(noTriples([1])); // → true
console.log(noTriples([])); // → true