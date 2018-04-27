function oneTwo(str) {
    var resultString = "";
    for(var i=0; i<str.length-1; i+=3){
        if(str[i] && str[i+1] && str[i+2]) {
            resultString += str.substring(i+1, i+3) + str[i];
        }
    }
return resultString;
}


console.log(oneTwo("abc")); // "bca"
console.log(oneTwo("tca")); // "cat"
console.log(oneTwo("tcagdo")); // "catdog"
console.log(oneTwo("chocolate")); // "hocolctea"
console.log(oneTwo("1234567890")); // "231564897"
console.log(oneTwo("xabxabxabxabxabxabxab")); // "abxabxabxabxabxabxabx"
console.log(oneTwo("abcdefx")); // "bcaefd"
console.log(oneTwo("abcdefxy")); // "bcaefd"
console.log(oneTwo("abcdefxyz")); // "bcaefdyzx"
console.log(oneTwo("")); // ""
console.log(oneTwo("x")); // ""
console.log(oneTwo("xy")); // ""
console.log(oneTwo("xyz")); // "yzx"
console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz1234567890")); // "bcaefdhigkljmnkpqostrvwuyzx231564897"
console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz123456789")); // "bcaefdhigkljmnkpqostrvwuyzx231564897"
console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz12345678")); // "bcaefdhigkljmnkpqostrvwuyzx231564"
