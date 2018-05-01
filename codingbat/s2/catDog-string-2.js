/*

Return true if the string "cat" and "dog" appear the same 
number of times in the given string.

*/


function catDog(str) {
    if ((typeof str === "string")) {
      var countCat = 0;
      var countDog = 0;
      str = str.toLowerCase(str);
      for (let i=0; i<=str.length-1; i++) {
         // console.log(strHI);
          if (str.substr(i,3) == 'cat') {
            countCat++;
          } else if (str.substr(i,3) == 'dog') {
              countDog++;
          }
      }
      return countCat === countDog;
  } else {
      return `The argument "${str}" must be a string`;
  }
  
}

console.log(catDog("catdog")); // → true
console.log(catDog("catcat")); // → false
console.log(catDog("1cat1cadodog")); // → true
console.log(catDog("dogogcat")); // → true
console.log(catDog("c"));
console.log(catDog("ca---"));
console.log(catDog([]));
console.log(catDog({}));
console.log(catDog(null));
console.log(catDog(true));
console.log(catDog());
console.log(catDog(1));
console.log(catDog("1"));