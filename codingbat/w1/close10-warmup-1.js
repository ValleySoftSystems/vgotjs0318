function close10(num1, num2){
	if ((typeof num1 === "number") && (typeof num2 === "number")) {
    if ((Math.abs(10 - num1)) < (Math.abs(10 - num2))){
         return `num1 is closer to 10:  ${num1}`;
         } else if ((Math.abs(10 - num1)) == (Math.abs(10 - num2))){
           return 0;
         } else {
             return `num2 is closer to 10: ${num2}`;
         }
  }
}

console.log(close10(8, 13));// → 8
console.log(close10(13, 8));// → 8
console.log(close10(13, 7));// → 0