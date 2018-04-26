function lastTwo(str) {
    if(str.length<2) return str;
    return str.substring(0,str.length-2) + str.substr(-1) + str.substr(-2,1);

}

console.log(lastTwo("coding")); // "codign"
console.log(lastTwo("cat")); // "cta"
console.log(lastTwo("ab")); // "ba"
console.log(lastTwo("a")); // "a"
console.log(lastTwo("")); // ""
