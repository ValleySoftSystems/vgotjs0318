
function intMax(num1, num2, num3) {
  if (!((isNaN(num1)) || (isNaN(num2)) || (isNaN(num3)))) { 
    var maxNum;
    if (num1 > num2)
      maxNum = num1;
    else
      maxNum = num2;

    if (num3 > maxNum)
      maxNum = num3;

    return maxNum;
  } else {
    return "Invalid numbers";
  }
}

console.log(intMax(991, 1, 3));
console.log(intMax(1, "k", 2));
console.log(intMax(3, 28, 444));