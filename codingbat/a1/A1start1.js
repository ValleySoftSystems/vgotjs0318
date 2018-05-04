function start1(a,b) {
  var count = 0;
  if(a[0]==1) count++;
  if(b[0]==1) count++;
return count;
}

console.log(start1([1, 2, 3], [1, 3])); // 2
console.log(start1([7, 2, 3], [1])); // 1
console.log(start1([1, 2], [])); // 1
console.log(start1([], [1, 2])); // 1
console.log(start1([7], [])); // 0
console.log(start1([7], [1])); // 1
console.log(start1([1], [1])); // 2
console.log(start1([7], [8])); // 0
console.log(start1([], [])); // 0
console.log(start1([1, 3], [1])); // 2
