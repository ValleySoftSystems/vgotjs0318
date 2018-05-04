function swapEnds(nums) {
  var first = nums[0];
  //var last = nums[nums.length-1];
  nums[0] = nums[nums.length-1];
  nums[nums.length-1] = first;
  return nums;
}

console.log(swapEnds([1, 2, 3, 4])); // [4, 2, 3, 1]
console.log(swapEnds([1, 2, 3])); // [3, 2, 1]
console.log(swapEnds([8, 6, 7, 9, 5])); // [5, 6, 7, 9, 8]
console.log(swapEnds([3, 1, 4, 1, 5, 9])); // [9, 1, 4, 1, 5, 3]
console.log(swapEnds([1, 2])); // [2, 1]
console.log(swapEnds([1])); // [1]
