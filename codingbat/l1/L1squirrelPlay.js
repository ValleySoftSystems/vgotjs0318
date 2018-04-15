function squirrelPlay(temp, isSummer) {
    return (((temp>=60 && temp<=90) && !isSummer) || ((temp>=60 && temp<=100) && isSummer));
}

console.log(squirrelPlay(70, false)); // true
console.log(squirrelPlay(95, false)); // false
console.log(squirrelPlay(95, true)); // true
console.log(squirrelPlay(90, false)); // true
console.log(squirrelPlay(90, true)); // true
console.log(squirrelPlay(50, false)); // false
console.log(squirrelPlay(50, true)); // false
console.log(squirrelPlay(100, false)); // false
console.log(squirrelPlay(100, true)); // true
console.log(squirrelPlay(105, true)); // false
console.log(squirrelPlay(59, false)); // false
console.log(squirrelPlay(59, true)); // false
console.log(squirrelPlay(60, false)); // true

