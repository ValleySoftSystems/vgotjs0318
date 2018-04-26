function frontAgain(str) {
    if(str.length<2) return false;
    return str.substr(0,2) == str.substr(-2);
}

console.log(frontAgain("edited")); // true
console.log(frontAgain("edit")); // false
console.log(frontAgain("ed")); // true
console.log(frontAgain("jj")); // true
console.log(frontAgain("jjj")); // true
console.log(frontAgain("jjjj")); // true
console.log(frontAgain("jjjk")); // false
console.log(frontAgain("x")); // false
console.log(frontAgain("")); // false
console.log(frontAgain("java")); // false
console.log(frontAgain("javaja")); // true

