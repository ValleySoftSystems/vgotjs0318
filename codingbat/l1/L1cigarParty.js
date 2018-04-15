function cigarParty(cigar, isWeekend) {
    return (((cigar>=40 && cigar<=60) && !isWeekend)||(cigar>=40 && isWeekend));
}

console.log(cigarParty(30, false)); // false
console.log(cigarParty(50, false)); // true
console.log(cigarParty(70, true)); // true
console.log(cigarParty(30, true)); // false
console.log(cigarParty(50, true)); // true
console.log(cigarParty(60, false)); // true
console.log(cigarParty(61, false)); // false
console.log(cigarParty(40, false)); // true
console.log(cigarParty(39, false)); // false
console.log(cigarParty(40, true)); // true
console.log(cigarParty(39, true)); // false


