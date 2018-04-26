function lastChars(strA, strB) {
    //if(strA.length==0 && strB.length==0) return "@@";
    //if(strA.length==0) return "@"+strB.substr(-1);
    //if(strB.length==0) return strA.substr(0,1)+"@";

    //above 3 statements can be written in two statements as below
    if(strA.length==0) strA="@";
    if(strB.length==0) strB="@";
    return strA.substr(0,1) + strB.substr(-1);
}

console.log(lastChars("last", "chars")); // "ls"
console.log(lastChars("yo", "java")); // "ya"
console.log(lastChars("hi", "")); // "h@"
console.log(lastChars("", "hello")); // "@o"
console.log(lastChars("", "")); // "@@"
console.log(lastChars("kitten", "hi")); // "ki"
console.log(lastChars("k", "zip")); // "kp"
console.log(lastChars("kitten", "")); // "k@"
console.log(lastChars("kitten", "zip")); // "kp"
