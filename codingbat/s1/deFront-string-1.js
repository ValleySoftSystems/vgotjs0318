function deFront(str) {
  if (typeof str === "string") {
    var strInLowerCase = str.toLowerCase();
    var firstChar = strInLowerCase.startsWith("a") ? "a" : "";
    var secondChar = (strInLowerCase[1] === "b") ? "b" : "";
    var total = `${firstChar} ${secondChar} ${strInLowerCase.substring(2)}`
      return total.split(' ').join('');
  }
}


console.log(deFront("Hello")); // → "llo"
console.log(deFront("java")); // → "va"
console.log(deFront("away")); // → "aay"
console.log(deFront("ax")); // → "a"
console.log(deFront("xz")); // → ""
console.log(deFront("zzz")); //→ "z"