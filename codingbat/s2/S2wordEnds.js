function wordEnds(str, word) {
    var resultString = "";
    var len = word.length;
    var flag = false;
    for(var i=0; i<str.length; i++){
        if(str.substring(i,i+len) == word){
            resultString += str.substring(i-1,i);
            flag = true;
            i=i+(len-1);
        }
       if(flag){
            resultString+= str.substring(i+1,i+2);
            flag= false;
       }
    }
 return resultString;
}

console.log(wordEnds("abcXY123XYijk", "XY")); // "c13i"
console.log(wordEnds("XY123XY", "XY")); // "13"
console.log(wordEnds("XY1XY", "XY")); // "11"
console.log(wordEnds("XYXY", "XY")); // "XY"
console.log(wordEnds("XY", "XY")); // ""
console.log(wordEnds("Hi", "XY")); // ""
console.log(wordEnds("", "XY")); // ""
console.log(wordEnds("abc1xyz1i1j", "1")); // "cxziij"
console.log(wordEnds("abc1xyz1", "1")); // "cxz"
console.log(wordEnds("abc1xyz11", "1")); // "cxz11"
console.log(wordEnds("abc1xyz1abc", "abc")); // "11"
console.log(wordEnds("abc1xyz1abc", "b")); // "acac"
console.log(wordEnds("abc1abc1abc", "abc")); // "1111"

