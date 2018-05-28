
function endUp(str) {
  if ((typeof str) === "string") {
      if (str.length <= 3){
        return str.toUpperCase();
      } 
      else {
        var frontPart = str.slice(0, str.length-3);
        var lastPart = str.slice(str.length-3, str.length);
        var newStr = frontPart + lastPart.toUpperCase();
        return newStr;
      }
  } 
  else {
      return `${str}: Not a string`;
  }
}

console.log(endUp("Hello"));//→ "HeLLO"
console.log(endUp("hi there"));// → "hi thERE"
console.log(endUp(99));//→ "HI"