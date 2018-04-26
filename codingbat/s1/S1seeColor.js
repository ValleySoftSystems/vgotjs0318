function seeColor(str) {
    if(str.length>=3 && str.startsWith("red")) return "red";
    if(str.length>=4 && str.startsWith("blue")) return "blue";
    return "";
}

console.log(seeColor("redxx")); // "red"
console.log(seeColor("xxred")); // ""
console.log(seeColor("blueTimes")); // "blue"
console.log(seeColor("NoColor")); // ""
console.log(seeColor("red")); // "red"
console.log(seeColor("re")); // ""
console.log(seeColor("blu")); // ""
console.log(seeColor("blue")); // "blue"
console.log(seeColor("a")); // ""
console.log(seeColor("")); // ""
console.log(seeColor("xyzred")); // ""
