function withoutEnd(str) {
    if(str.length<=2) return str;
    return str.substring(1,str.length-1);
}

console.log(withoutEnd("Hello"));
console.log(withoutEnd("java"));
console.log(withoutEnd("coding"));
console.log(withoutEnd("as"));
console.log(withoutEnd("a"));
console.log(withoutEnd(""));