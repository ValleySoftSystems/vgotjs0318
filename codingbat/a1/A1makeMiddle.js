function makeMiddle(nums) {
    var mid = Math.floor(nums.length/2);
    return [nums[mid-1],nums[mid]];
}

console.log(makeMiddle([1, 2, 3, 4])); // [2, 3]
console.log(makeMiddle([7, 1, 2, 3, 4, 9])); // [2, 3]
console.log(makeMiddle([1, 2])); // [1, 2]
console.log(makeMiddle([5, 2, 4, 7])); // [2, 4]
console.log(makeMiddle([9, 0, 4, 3, 9, 1])); // [4, 3]


