function lastTwo(str) {
  if ((typeof str === "string") && (str.length >=3)) {
    return str.substr(0,str.length-2) + str.substr(str.length-2,2).split('').reverse().join('');
  }
  return str.substr(str.length-2,2).split('').reverse().join('');
}


console.log(lastTwo("coding")); // → "codign"
console.log(lastTwo("cat")); // → "cta"
console.log(lastTwo("ab")); // → "ba"
console.log(lastTwo("")); // → ""
console.log(lastTwo("a")); // → "ba"