function mirrorEnds(str) {
    var result = "";
    for(var i=0, j=str.length-1; i<str.length; i++, j--){
            if(str[i] == str[j]){
                result += str[i];
            }else break;
    }
return result;
}

console.log(mirrorEnds("abXYZba")); // "ab"
console.log(mirrorEnds("abca")); // "a"
console.log(mirrorEnds("aba")); // "aba"
console.log(mirrorEnds("abab")); // ""
console.log(mirrorEnds("xxx")); // "xxx"
console.log(mirrorEnds("xxYxx")); // "xxYxx"
console.log(mirrorEnds("Hi and iH")); // "Hi "
console.log(mirrorEnds("x")); // "x"
console.log(mirrorEnds("")); // ""
console.log(mirrorEnds("123and then 321")); // "123"
console.log(mirrorEnds("band andab")); // "ba"

