
function firstLast6(arr) {
  
  return (Array.isArray(arr) && ((arr.indexOf(6) === 0) || ((arr.lastIndexOf(6) === arr.length-1))));
}




console.log(firstLast6([1, 2, 6]));  // → true
console.log(firstLast6([6, 1, 2, 3]));  // → true
console.log(firstLast6([13, 6, 1, 2, 3]));  // → false
console.log(firstLast6([6]));  // → true 
console.log(firstLast6([3]));  // → false

console.log("empty array --> " +firstLast6([]));  // true
console.log("string --> " +firstLast6("a"));  // true
console.log("number --> " +firstLast6(2));  // true
