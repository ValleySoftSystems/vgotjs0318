function frontTimes(str, num) {
  if ((typeof num !== "number") || (Number.isNaN(num))) {
    return `The second arg - ${num}- must be a number.`;
  }
  if (typeof str === "string") {
    if (str.length < 3)
      return str;
    else {
      //var copies = 3;
      var newStr = '';
      for ( var i=0; i<num; i++){
        newStr += str.substr(0,3);
      }
      return newStr;
    }
  } else {
      return `The first arg - ${str}- must be a string.`
  }
}

console.log(frontTimes("Chocolate", 2)); // → "ChoCho"
console.log(frontTimes("Chocolate", 3)); // → "ChoChoCho"
console.log(frontTimes("Abc", 3)); // → "AbcAbcAbc"