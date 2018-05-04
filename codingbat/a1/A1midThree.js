function midThree(nums) {
    var mid = Math.floor(nums.length/2);
    return [nums[mid-1], nums[mid], nums[mid+1]];
}

console.log(midThree([1, 2, 3, 4, 5])); // [2, 3, 4]
console.log(midThree([8, 6, 7, 5, 3, 0, 9])); // [7, 5, 3]
console.log(midThree([1, 2, 3])); // [1, 2, 3]