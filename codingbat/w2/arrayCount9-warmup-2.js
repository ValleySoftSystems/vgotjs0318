
function arrayCount9(arr) {
  var strOfArr = arr.join('');
  var count=0;
  for (let i=0;i<strOfArr.length;i++) {
    if (strOfArr.substr(i,1) === "9") {
      count++;
    }
  }
  return count;
  
}


console.log(arrayCount9([1, 2, 9])); // → 1
console.log(arrayCount9([1, 9, 9])); // → 2
console.log(arrayCount9([1, 9, 9, 3, 9])); // → 3