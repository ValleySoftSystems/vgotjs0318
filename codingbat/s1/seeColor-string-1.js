
function seeColor(str) {
  if (typeof str === "string") {
    if (str.startsWith("red"))  // || (str.startsWith("blue"))) 
      return "red";
    if (str.startsWith("blue"))
      return "blue";
  }
  return "";
}


console.log(seeColor("redxx")); // → "red"
console.log(seeColor("xxred")); // → ""
console.log(seeColor("blueTimes")); // → "blue"
console.log(seeColor("a")); // → ""
console.log(seeColor("")); // → ""
console.log(seeColor("xyzred")); // → ""
console.log(seeColor("re")); // → ""
console.log(seeColor("blue")); // → "blue"