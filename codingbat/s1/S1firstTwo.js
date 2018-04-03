function firstTwo(str) {
    if(str.length<2) return str;
    return str.slice(0,2);
}

console.log(firstTwo("Hello"));
console.log(firstTwo("abcdefg"));
console.log(firstTwo("ab"));
console.log("d");
console.log("");