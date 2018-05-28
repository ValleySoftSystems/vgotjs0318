
function arrayFront9(arr) {

    var strOfArr = arr.join('');
    var firstFourElem = 4;
    for (let i=0; i<firstFourElem; i++) {
      if (strOfArr.substr(i,1) === "9") {
        return true;
      }
    }
    return false;
}



console.log(arrayFront9([1, 2, 9, 3, 4])); // → true
console.log(arrayFront9([1, 2, 3, 4, 9])); // → false
console.log(arrayFront9([1, 2, 3, 4, 5])); // → false