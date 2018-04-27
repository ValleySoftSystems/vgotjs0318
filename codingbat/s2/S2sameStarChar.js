function sameStarChar(str) {
    for(var i=1; i<str.length-1; i++){
      if (str[i]=="*" && str[i-1]!=str[i+1]){
          return false;
      }

    }
return true;
}

console.log(sameStarChar("xy*yzz")); // true
console.log(sameStarChar("xy*zzz")); // false
console.log(sameStarChar("*xa*az")); // true
console.log(sameStarChar("*xa*bz")); // false
console.log(sameStarChar("*xa*a*")); // true
console.log(sameStarChar("")); // true
console.log(sameStarChar("*xa*a*a")); // true
console.log(sameStarChar("*xa*a*b")); // false
console.log(sameStarChar("*12*2*2")); // true
console.log(sameStarChar("12*2*3*")); // false
console.log(sameStarChar("abcDEF")); // true
console.log(sameStarChar("XY*YYYY*Z*")); // false
console.log(sameStarChar("XY*YYYY*Y*")); // true
console.log(sameStarChar("12*2*3*")); // false
console.log(sameStarChar("*")); // true
console.log(sameStarChar("**")); // true

