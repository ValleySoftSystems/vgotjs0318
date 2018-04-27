function getSandwich(str) {
    var firstIdx = str.indexOf("bread");
    var lastIdx = str.lastIndexOf("bread");
    //if(firstIdx==-1 || lastIdx==-1 || firstIdx==lastIdx) return "";
    if(firstIdx==lastIdx) return "";
    return str.substring(firstIdx+5, lastIdx);
    
}

console.log(getSandwich("breadjambread")); // "jam"
console.log(getSandwich("xxbreadjambreadyy")); // "jam"
console.log(getSandwich("xxbreadyy")); // ""
console.log(getSandwich("xxbreadbreadjambreadyy")); // "breadjam"
console.log(getSandwich("breadAbread")); // "A"
console.log(getSandwich("breadbread")); // ""
console.log(getSandwich("abcbreaz")); // ""
console.log(getSandwich("xyz")); // ""
console.log(getSandwich("")); // ""
console.log(getSandwich("breadbreaxbread")); // "breax"
console.log(getSandwich("breaxbreadybread")); // "y"
console.log(getSandwich("breadbreadbreadbread")); // "breadbread"
