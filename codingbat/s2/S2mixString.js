/************************************************/
function mixString(strA, strB){
 var result = "";
 for(var idx=0; idx<Math.max(strA.length, strB.length); idx++){
     if(idx<strA.length){
         result += strA.substring(idx, idx+1);
     }
     if(idx<strB.length){
         result += strB.substring(idx, idx+1);
     }
 }
 return result;
}

console.log(mixString("abc", "xyz")); //"axbycz"
console.log(mixString("Hi", "There")); //"HTihere"
console.log(mixString("xxxx", "There")); //"xTxhxexre"
console.log(mixString("xxx", "X")); //"xXxx"
console.log(mixString("2/", "27 around")); //"22/7 around"
console.log(mixString("", "Hello")); // "Hello"
console.log(mixString("Abc", "")); //"Abc"
console.log(mixString("", "")); //""
console.log(mixString("a", "b")); //"ab"
console.log(mixString("ax", "b")); //"abx"
console.log(mixString("a", "bx")); // "abx"
console.log(mixString("So", "Long")); //"SLoong"
console.log(mixString("Long", "So")); //"LSoong"
