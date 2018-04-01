
function lastDigit(num1, num2) {
	if ((typeof num1 === "number") && (typeof num2 === "number")) {
    if ((num1 > 0) && (num2 > 0)) {
      var rem1 = num1 % 10;
      var rem2 = num2 % 10;

      if (rem1 == rem2) {
        return true;
      } else {
        return false;
      }
    } else {
    		return `Both the arguments must be positive integers.`
    }
  } 
  else {
  	 return `Both the arguments must be positive integers.`
  }
}


console.log(lastDigit(7, 17));// → true
console.log(lastDigit(6, 17));// → false
console.log(lastDigit(3, 113));// → true