function stringMatch(strA, strB){
    var strLength = Math.min(strA.length, strB.length);
    count = 0;

    for(var i=0; i<strLength-1;i++){
        var aSubstring = strA.substring(i, i+2);
        var bSubstring = strB.substring(i, i+2);
        if(aSubstring == bSubstring) count++;
    }
 return count;
}

console.log(stringMatch("xxcaazz", "xxbaaz") );
console.log(stringMatch("abc", "abc"));
console.log(stringMatch("abc", "axc") );
console.log(stringMatch("hello", "he"));
console.log(stringMatch("he", "hello") );
console.log(stringMatch("h", "hello"));
console.log(stringMatch("", "hello") );
console.log(stringMatch("aabbccdd", "abbbxxd") );
console.log(stringMatch("aaxxaaxx", "iaxxai"));
console.log(stringMatch("iaxxai", "aaxxaaxx"));