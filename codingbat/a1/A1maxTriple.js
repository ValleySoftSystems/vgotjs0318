function maxTriple(nums) {
    var max= nums[0];
    var mid = Math.floor(nums.length/2);
    if(nums[mid] > max) {
        max = nums[mid];
    }
    if(nums[nums.length-1] > max) {
        max = nums[nums.length-1];
    }
 return max;
}


console.log(maxTriple([1, 2, 3])); // 3
console.log(maxTriple([1, 5, 3])); // 5
console.log(maxTriple([5, 2, 3])); // 5
console.log(maxTriple([1, 2, 3, 1, 1])); // 3
console.log(maxTriple([1, 7, 3, 1, 5])); // 5
console.log(maxTriple([5, 1, 3, 7, 1])); // 5
console.log(maxTriple([5, 1, 7, 3, 7, 8, 1])); // 5
console.log(maxTriple([5, 1, 7, 9, 7, 8, 1])); // 9
console.log(maxTriple([5, 1, 7, 3, 7, 8, 9])); // 9
console.log(maxTriple([2, 2, 5, 1, 1])); // 5
