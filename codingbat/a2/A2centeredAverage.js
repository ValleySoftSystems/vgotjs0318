function centeredAverage(arr) {
var maxIndex = arr.lastIndexOf(Math.max.apply(null,arr));
arr.splice(maxIndex,1);

var minIndex = arr.lastIndexOf(Math.min.apply(null, arr));
arr.splice(minIndex,1);

var average = (arr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0))/arr.length;

    return Math.round(average);
    //return average;
}

/* -------------   Reduce prototype  ------------------------
If initialValue isn't provided, reduce() will execute the callback function starting at index 1,
  skipping the first index. If initialValue is provided, it will start at index 0.

  [0, 1, 2, 3, 4].reduce(
  function (
    accumulator,
    currentValue,
    currentIndex,
    array,
    initialValue
  ) {
    return accumulator + currentValue;
  }
);*/


console.log(centeredAverage([1, 2, 3, 4, 100])); // 3
console.log(centeredAverage([1, 1, 5, 5, 10, 8, 7])); // 5
console.log(centeredAverage([-10, -4, -2, -4, -2, 0])); // -3
console.log(centeredAverage([5, 3, 4, 6, 2])); // 4
console.log(centeredAverage([5, 3, 4, 0, 100])); // 4
console.log(centeredAverage([100, 0, 5, 3, 4])); // 4
console.log(centeredAverage([4, 0, 100])); // 4
console.log(centeredAverage([0, 2, 3, 4, 100])); // 3
console.log(centeredAverage([1, 1, 100])); // 1
console.log(centeredAverage([7, 7, 7])); // 7
console.log(centeredAverage([1, 7, 8])); // 7
console.log(centeredAverage([1, 1, 99, 99])); // 50
console.log(centeredAverage([1000, 0, 1, 99])); // 50
console.log(centeredAverage([4, 4, 4, 4, 5])); // 4
console.log(centeredAverage([4, 4, 4, 1, 5])); // 4
console.log(centeredAverage([6, 4, 8, 12, 3])); // 6









