
function sameFirstLast(arr) {
    return (Array.isArray(arr) && (arr.length >=1) && (arr.shift() === arr.pop()));
}


console.log(sameFirstLast([1, 2, 3]));  // → false
console.log(sameFirstLast([1, 2, 3, 1]));  // → true
console.log(sameFirstLast([1, 2, 1]));  // → true

console.log(sameFirstLast([]));  // → false
console.log("object --> " +sameFirstLast({}));  // → false
console.log("string --> " +sameFirstLast("a"));  // → false
console.log("number --> " +sameFirstLast(1));  // → false