
function missingChar (str, n) {
  if (n >= 0 && n < (str.length - 1)) {
      var arr = str.split("");    
      arr.splice(n, 1);
      return arr;
      } else {
      return "The argument 'n' must be in the range of zero to str.length";
      }  
}
console.log(missingChar("kitten", 1));
console.log(missingChar("kitten", 0));
console.log(missingChar("kitten", 4));