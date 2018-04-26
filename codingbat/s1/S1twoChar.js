function twoChar(str, index) {
    if(str.length==0) return "";
    if(index>str.length-2 || index<0) return str.substring(0,2);
    return str.substring(index, index+2);
}

console.log(twoChar("java", 0)); // "ja"
console.log(twoChar("java", 2)); // "va"
console.log(twoChar("java", 3)); // "ja"
console.log(twoChar("java", 4)); // "ja"
console.log(twoChar("java", -1)); // "ja"
console.log(twoChar("Hello", 0)); // "He"
console.log(twoChar("Hello", 1)); // "el"
console.log(twoChar("Hello", 99)); // "He"
console.log(twoChar("Hello", 3)); // "lo"
console.log(twoChar("Hello", 4)); // "He"
console.log(twoChar("Hello", 5)); // "He"
console.log(twoChar("Hello", -7)); // "He"
console.log(twoChar("Hello", 6)); // "He"
console.log(twoChar("Hello", -1)); // "He"
console.log(twoChar("yay", 0)); // "ya"
