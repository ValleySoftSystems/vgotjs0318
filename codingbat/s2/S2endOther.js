/*******************************/
function endOther(strA,strB) {
    var strA = strA.toLowerCase();
    var strB = strB.toLowerCase();
    /*var aLen = strA.length;
    var bLen = strB.length;
    console.log("lengths: " + aLen + " "+ bLen);
    if(aLen >= bLen){
        var end = strA.substring(aLen - bLen);
        var temp = strB;
        console.log("end: "+ end);
    }else {
        end = strB.substring(bLen - aLen);
        temp = strA;
        console.log("end: "+ end);
    }
    return end == temp ;*/
   return strA.endsWith(strB) || strB.endsWith(strA);
}

console.log(endOther("Hiabc", "abc")); //t
console.log(endOther("AbC", "HiaBc")); //t
console.log(endOther("abc", "abXabc")); //t
console.log(endOther("Hiabc", "abcd")); //f
console.log(endOther("Hiabc", "bc")); //t
console.log(endOther("Hiabcx", "bc")); //f
console.log(endOther("abc", "abc")); //t
console.log(endOther("xyz", "12xyz")); //t
console.log(endOther("yz", "12xz")); //f
console.log(endOther("Z", "12xz")); //t
console.log(endOther("12", "12")); //t
console.log(endOther("abcXYZ", "abcDEF")); //f
console.log(endOther("ab", "ab12")); //f
console.log(endOther("ab", "12ab")); //t
