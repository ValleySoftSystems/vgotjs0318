function hasBad(str) {
    return str.substring(0,3) == "bad" || str.substring(1,4)=="bad" ;
}

console.log(hasBad("badxx")); // true
console.log(hasBad("xbadxx")); // true
console.log(hasBad("xxbadxx")); // false
console.log(hasBad("code")); // false
console.log(hasBad("bad")); // true
console.log(hasBad("ba")); // false
console.log(hasBad("xba")); // false
console.log(hasBad("xbad")); // true
console.log(hasBad("")); // false
console.log(hasBad("badyy")); // true
