function endsLy(str) {
    str = str.toLowerCase();
    return str.endsWith("ly");
}

console.log(endsLy("oddly")); // true
console.log(endsLy("y")); // false
console.log(endsLy("oddy")); // false
console.log(endsLy("oddl")); // false
console.log(endsLy("olydd")); // false
console.log(endsLy("ly")); // true
console.log(endsLy("")); // false
console.log(endsLy("falsey")); // false
console.log(endsLy("evenly")); // true

