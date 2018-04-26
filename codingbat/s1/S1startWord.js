function startWord(str, word) {
 var wordlen = word.length;
    if((word == str.substring(0,wordlen))||(word.substring(1) == str.substring(1,wordlen))) return str.substring(0, wordlen);
    return "";
}

console.log(startWord("hippo", "hi")); // "hi"
console.log(startWord("hippo", "xip")); // "hip"
console.log(startWord("hippo", "i")); // "h"
console.log(startWord("hippo", "ix")); // ""
console.log(startWord("h", "ix")); // ""
console.log(startWord("", "i")); // ""
console.log(startWord("hip", "zi")); // "hi"
console.log(startWord("hip", "zip")); // "hip"
console.log(startWord("hip", "zig")); // ""
console.log(startWord("h", "z")); // "h"
console.log(startWord("hippo", "xippo")); // "hippo"
console.log(startWord("hippo", "xyz")); // ""
console.log(startWord("hippo", "hip")); // "hip"
console.log(startWord("kitten", "cit")); // "kit"
console.log(startWord("kit", "cit")); // "kit"
