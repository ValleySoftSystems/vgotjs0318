function in1To10(n, outsideMode) {
    return (outsideMode) ? (n <= 1 || n >= 10) : (n >= 1 && n <= 10);
}


console.log(in1To10(5, false)); // true
console.log(in1To10(11, false)); // false
console.log(in1To10(11, true)); // true
console.log(in1To10(10, false)); // true
console.log(in1To10(10, true)); // true
console.log(in1To10(9, false)); // true
console.log(in1To10(9, true)); // false
console.log(in1To10(1, false)); // true
console.log(in1To10(1, true)); // true
console.log(in1To10(0, false)); // false
console.log(in1To10(0, true)); // true
console.log(in1To10(-1, false)); // false
console.log(in1To10(-1, true)); // true
console.log(in1To10(99, false)); // false
console.log(in1To10(-99, true)); // true
