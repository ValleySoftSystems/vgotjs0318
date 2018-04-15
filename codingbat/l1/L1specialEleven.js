function specialEleven(n) {
    return (n%11==0) || (n%11==1);
}

console.log(specialEleven(22)); // true
console.log(specialEleven(23)); // true
console.log(specialEleven(24)); // false
console.log(specialEleven(21)); // false
console.log(specialEleven(11)); // true
console.log(specialEleven(12)); // true
console.log(specialEleven(10)); // false
console.log(specialEleven(9)); // false
console.log(specialEleven(8)); // false
console.log(specialEleven(0)); // true
console.log(specialEleven(1)); // true
console.log(specialEleven(2)); // false
console.log(specialEleven(121)); // true
console.log(specialEleven(122)); // true
console.log(specialEleven(123)); // false
console.log(specialEleven(46)); // false
console.log(specialEleven(49)); // false
console.log(specialEleven(52)); // false
console.log(specialEleven(54)); // false
console.log(specialEleven(55)); // true
