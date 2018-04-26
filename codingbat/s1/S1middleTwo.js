function middleTwo(str){
    var cut = str.length/2;
    return str.substring(cut-1, cut+1);
}

console.log(middleTwo("string")); // "ri"
console.log(middleTwo("code")); // "od"
console.log(middleTwo("Practice")); // "ct"
console.log(middleTwo("ab")); // "ab"
console.log(middleTwo("0123456789")); // "45"
