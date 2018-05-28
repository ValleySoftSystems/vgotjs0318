/*

Return the number of times that the string "hi" 
appears anywhere in the given string.

*/


function countHi(str) {
    if ((typeof str === "string")) {
      var count = 0;
      var strHI = '';
      for (let i=0; i<=str.length-1; i++) {
          strHI = str.substr(i,2);
          if (strHI == 'hi') {
            count++;
          }
      }
      return count;
  } else {
      return `The argument "${str}" must be a string`;
  }
  
}

console.log(countHi("abc hi ho")); // → 1
console.log(countHi("ABChi hi")); // → 2
console.log(countHi("hihi")); // → 2
console.log(countHi("hiho not HOHIhi")); // → 2
console.log(countHi("Hi is no HI on ahI")); // → 0
console.log(countHi("h") ); // → 0
console.log(countHi(""));
console.log(countHi([]));
console.log(countHi({}));
console.log(countHi("1"));
console.log(countHi(1));
console.log(countHi("hiho not HOHIhi") ); // → 2