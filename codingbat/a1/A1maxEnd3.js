function maxEnd3(arr) {
    var max = Math.max.apply(null,arr);
    return arr = [max, max, max];
}

console.log(maxEnd3([1, 2, 3]));
console.log(maxEnd3([11, 5, 9]));
console.log(maxEnd3([2, 11, 3]));
console.log(maxEnd3([11, 3, 3]));
console.log(maxEnd3([3, 11, 11]));
console.log(maxEnd3([2, 2, 2]));
console.log(maxEnd3([2, 11, 2]));
console.log(maxEnd3([0, 0, 1]));
