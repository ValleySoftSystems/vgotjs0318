function unlucky1(nums) {
    return ((nums[0]==1 && nums[1]==3) || (nums[1]==1 && nums[2]==3) || (nums[nums.length-2]==1 && nums[nums.length-1]==3));
}


console.log(unlucky1([1, 3, 4, 5])); // true
console.log(unlucky1([2, 1, 3, 4, 5])); // true
console.log(unlucky1([1, 1, 1])); // false
console.log(unlucky1([1, 3, 1])); // true
console.log(unlucky1([1, 1, 3])); // true
console.log(unlucky1([1, 2, 3])); // false
console.log(unlucky1([3, 3, 3])); // false
console.log(unlucky1([1, 3])); // true
console.log(unlucky1([1, 4])); // false
console.log(unlucky1([1])); // false
console.log(unlucky1([])); // false
console.log(unlucky1([1, 1, 1, 3, 1])); // false
console.log(unlucky1([1, 1, 3, 1, 1])); // true
console.log(unlucky1([1, 1, 1, 1, 3])); // true
console.log(unlucky1([1, 4, 1, 5])); // false
console.log(unlucky1([1, 1, 2, 3])); // false
console.log(unlucky1([2, 3, 2, 1])); // false
console.log(unlucky1([2, 3, 1, 3])); // true
console.log(unlucky1([1, 2, 3, 4, 1, 3])); // true
