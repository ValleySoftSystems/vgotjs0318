/*
Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"*/

/*
String result = "";
  for (int i=0; i<str.length(); i++) {
    // Only append the char if it is not the "x" case
    if (!(i > 0 && i < (str.length()-1) && str.substring(i, i+1).equals("x"))) {
      result = result + str.substring(i, i+1); // Could use str.charAt(i) here
    }
  }
  return result;
 */


function stringX(str) {
var resultStr = "";
if(str.length<=1) return str; // input string length is one

    for(var i=1;i<=str.length-2; i++){
        if(str[i]!="x"){
            resultStr += str[i];
        }
    }
return str[0]+ resultStr + str[str.length-1];
}

console.log(stringX("xxHxix") );
console.log(stringX("abxxxcd") );
console.log(stringX("xabxxxcdx"));
console.log(stringX("xKittenx"));
console.log(stringX("Hello"));
console.log(stringX("xx"));
console.log(stringX("x"));
console.log(stringX(""));
