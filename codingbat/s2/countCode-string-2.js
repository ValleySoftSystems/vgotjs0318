/*

Return the number of times that the string "code" appears anywhere 
in the given string, except we'll accept any letter for the 'd', 
so "cope" and "cooe" count.

*/


function countCode(str) {
    if ((typeof str === "string")) {
      var count = 0;
      for (let i=0; i<=str.length-4; i++) {
          if (str.substr(i,4).match(/co[a-zA-Z]e/g)) {
            count++;
          }
      }
      return count;
  } else {
      return `The argument "${str}" must be a string`;
  }
  
}


console.log(countCode("aaacodebbb")); // → 1
console.log(countCode("codexxcode")); // → 2
console.log(countCode("cozexxcope")); // → 2
console.log(countCode("cozcop")); // → 0
console.log(countCode("AAcodeBBcoleCCccorfDD")); // → 2
console.log(countCode(""));
console.log(countCode([]));
console.log(countCode({}));
console.log(countCode(null));
console.log(countCode(true));
console.log(countCode());
console.log(countCode(1));
console.log(countCode("1"));