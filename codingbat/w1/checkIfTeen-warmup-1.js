function checkIfTeen(num) {
	return (num >= 13 && num <= 19);
}

function hasTeen(num1, num2, num3) {
  var num1 = checkIfTeen(num1) ? num1 : 0;
  var num2 = checkIfTeen(num2) ? num2 : 0;
  var num3 = checkIfTeen(num3) ? num3 : 0;
  if (num1 || num2 || num3)
      return true;
    else 
      return false;
}

console.log(hasTeen(13, 20, 10));// → true
console.log(hasTeen(20, 19, 10));// → true
console.log(hasTeen(20, 10, 13)); // → true