function twoAsOne(a,b,c) {
   return a+b==c || b+c==a || c+a==b;
}

console.log(twoAsOne(1, 2, 3)); // true
console.log(twoAsOne(3, 1, 2)); // true
console.log(twoAsOne(3, 2, 2)); // false
console.log(twoAsOne(2, 3, 1)); // true
console.log(twoAsOne(5, 3, -2)); // true
console.log(twoAsOne(5, 3, -3)); // false
console.log(twoAsOne(2, 5, 3)); // true
console.log(twoAsOne(9, 5, 5)); // false
console.log(twoAsOne(9, 4, 5)); // true
console.log(twoAsOne(5, 4, 9)); // true
console.log(twoAsOne(3, 3, 0)); // true
console.log(twoAsOne(3, 3, 2)); // false
