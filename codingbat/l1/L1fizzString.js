function fizzString(str) {
    if(str.startsWith('f') && str.endsWith('b')) return 'FizzBuzz';
    if(str.startsWith('f')) return 'Fizz';
    if(str.endsWith('b')) return 'Buzz'
    return str;
}

console.log(fizzString("fig")); // "Fizz"
console.log(fizzString("dib")); // "Buzz"
console.log(fizzString("fib")); // "FizzBuzz"
console.log(fizzString("abc")); // "abc"
console.log(fizzString("fooo")); // "Fizz"
console.log(fizzString("booo")); // "booo"
console.log(fizzString("ooob")); // "Buzz"
console.log(fizzString("fooob")); // "FizzBuzz"
console.log(fizzString("f")); // "Fizz"
console.log(fizzString("b")); // "Buzz"
console.log(fizzString("abcb")); // "Buzz"
console.log(fizzString("Hello")); // "Hello"
console.log(fizzString("Hellob")); // "Buzz"
console.log(fizzString("af")); // "af"
console.log(fizzString("bf")); // "bf"
console.log(fizzString("fb")); // "FizzBuzz"
