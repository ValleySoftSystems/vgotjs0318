
function stringSplosion(str){
  if (typeof str === "string") {
    var newStr = '';
    for (var i=0;i<str.length;i++) {
      
      newStr += str.substr(0,i+1);
    }
    return newStr;
    
    
    
  }
}


console.log(stringSplosion("Code")); // → "CCoCodCode"
console.log(stringSplosion("abc")); // → "aababc"
console.log(stringSplosion("ab")); // → "aab"
console.log(stringSplosion("x")); // → "x"