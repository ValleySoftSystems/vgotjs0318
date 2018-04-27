function plusOut(str, word) {
    var resultString = "";
    var len = word.length;
    for(var i=0; i<str.length; i++){
        if(str.substring(i,i+len) !== word){
            resultString += "+";
        }else{
            resultString += word;
            i=i+(len-1);
        }
    }
 return resultString;
}

console.log(plusOut("12xy34", "xy")); // "++xy++"
console.log(plusOut("12xy34", "1")); // "1+++++"
console.log(plusOut("12xy34xyabcxy", "xy")); // "++xy++xy+++xy"
console.log(plusOut("abXYabcXYZ", "ab")); // "ab++ab++++"
console.log(plusOut("abXYabcXYZ", "abc")); // "++++abc+++"
console.log(plusOut("abXYabcXYZ", "XY")); // "++XY+++XY+"
console.log(plusOut("abXYxyzXYZ", "XYZ")); // "+++++++XYZ"
console.log(plusOut("--++ab", "++")); // "++++++"
console.log(plusOut("aaxxxxbb", "xx")); // "++xxxx++"
console.log(plusOut("123123", "3")); // "++3++3"
