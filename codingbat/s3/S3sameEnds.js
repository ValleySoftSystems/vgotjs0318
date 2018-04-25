function sameEnds(str) {
    var result = "";
    var len = str.length;
    for(var i=0; i<=len/2; i++){
        for(var j=len/2; j<len; j++){
            if(str.substring(0,i) == str.substring(j)){
                result = str.substring(0,i);
            }
        }
    }
  return result;
}



console.log(sameEnds("abXYab")); // "ab"
console.log(sameEnds("xx")); // "x"
console.log(sameEnds("xxx")); // "x"`
console.log(sameEnds("xxxx")); // "xx"
console.log(sameEnds("javaXYZjava")); // "java"
console.log(sameEnds("javajava")); // "java"
console.log(sameEnds("xavaXYZjava")); // ""
console.log(sameEnds("Hello! and Hello!")); // "Hello!"
console.log(sameEnds("x")); // ""
console.log(sameEnds("")); // ""
console.log(sameEnds("abcb")); // ""
console.log(sameEnds("mymmy")); // "my"
