function comboString(strA, strB) {
    var lenA = strA.length;
    var lenB = strB.length;
    if(lenA >lenB) {
        return strB + strA + strB
    }else return strA + strB + strA
    
}
console.log(comboString("Hello", "hi"));
console.log(comboString("hi", "Hello"));
console.log(comboString("aaa", "b"));
console.log();