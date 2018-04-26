function atFirst(str) {
   if(str.length==1) return str+"@";
   if(str.length==0) return "@@";
    return str.substring(0,2);
}

console.log(atFirst("hello")); // "he"
console.log(atFirst("hi")); // "hi"
console.log(atFirst("h")); // "h@"
console.log(atFirst("")); // "@@"
console.log(atFirst("kitten")); // "ki"
console.log(atFirst("java")); // "ja"
console.log(atFirst("j")); // "j@"
