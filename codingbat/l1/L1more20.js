function more20(n) {
   return  (n%20 == 1 || n%20==2)
}

console.log(more20(20)); // false
console.log(more20(21)); // true
console.log(more20(22)); // true
console.log(more20(23)); // false
console.log(more20(25)); // false
console.log(more20(30)); // false
console.log(more20(31)); // false
console.log(more20(59)); // false
console.log(more20(60)); // false
console.log(more20(61)); // true
console.log(more20(62)); // true
console.log(more20(1020)); // false
console.log(more20(1021)); // true
console.log(more20(1000)); // false
console.log(more20(1001)); // true
console.log(more20(50)); // false
console.log(more20(55)); // false
console.log(more20(40)); // false
console.log(more20(41)); // true
console.log(more20(39)); // false
console.log(more20(42)); // true


