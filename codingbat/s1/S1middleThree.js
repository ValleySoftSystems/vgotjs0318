function middleThree(str) {
    if(str.length<3) return "";
    var mid = Math.floor(str.length/2); //without using Math.floor division operation returns a decimal number as string length is Odd.
    return str[mid-1] + str[mid] + str[mid+1] ;
}

console.log(middleThree("Candy")); // "and"
console.log(middleThree("and")); // "and"
console.log(middleThree("solving")); // "lvi"
console.log(middleThree("Hi yet Hi")); // "yet"
console.log(middleThree("java yet java")); // "yet"
console.log(middleThree("Chocolate")); // "col"
console.log(middleThree("XabcxyzabcX")); // "xyz"
