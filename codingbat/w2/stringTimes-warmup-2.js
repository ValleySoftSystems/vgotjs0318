function stringTimes(str, num) {
  if (typeof str !== "string") {
    return `First arg must be a string`;
  }
  if ((typeof num !== "number") || Number.isNaN(num)) {
     return `The second arg must be a non-negative number`;  
  }
  if ((num === 0) || (str === "")) {
    return "";
  }
  var newStr = '';
  for (let i=0;i<num;i++){
    newStr += str;
  }
  return newStr;
  
}

console.log(stringTimes("Hi", 2)); // → "HiHi" 
console.log(stringTimes("Hi", 3)); // → "HiHiHi"
console.log(stringTimes("Hi", 1)); // → "Hi"
console.log(stringTimes("Hi", 0)); // → ""
console.log(stringTimes("Oh Boy!", 2)); // → Oh Boy!Oh Boy!
console.log(stringTimes("", 4)); // → ""
console.log(stringTimes(true, 4)); // → First arg must be a string