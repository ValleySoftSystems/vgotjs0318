function withoutEnd(str) {
  if ((typeof str === "string") && (str.length >= 2)) {
    return str.substr(1,str.length-2);
  }
  return `The argument must be a string of atleast 2 characters length.`
}


console.log(withoutEnd("Hello")); // → "ell"
console.log(withoutEnd("c"));
console.log(withoutEnd("java")); // → "av"
console.log(withoutEnd("coding")); // → "odin"