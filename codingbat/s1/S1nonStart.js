function nonStart(strA, strB) {
    return strA.substring(1)+ strB.substring(1);
}

console.log(nonStart("Hello", "There"));
console.log(nonStart("java", "code"));
console.log(nonStart("shotl", "java") );
console.log(nonStart("ab", "xy"));
console.log(nonStart("ab", "x"));
console.log(nonStart("x", "ac"));
console.log(nonStart("a", "x"));
console.log(nonStart("kit", "kat"));
console.log(nonStart("mart", "dart"));
