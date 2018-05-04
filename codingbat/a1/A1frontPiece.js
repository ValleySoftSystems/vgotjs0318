function frontPiece(nums) {
    if(nums.length<2) return nums;
    return[nums[0],nums[1]];
}

console.log(frontPiece([1, 2, 3])); // [1, 2]
console.log(frontPiece([1, 2])); // [1, 2]
console.log(frontPiece([1])); // [1]
console.log(frontPiece([])); // []
console.log(frontPiece([6, 5, 0])); // [6, 5]
console.log(frontPiece([6, 5])); // [6, 5]
console.log(frontPiece([3, 1, 4, 1, 5])); // [3, 1]
console.log(frontPiece([6])); // [6]
