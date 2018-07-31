function square(list) {
    return list.map(x => x*x);
}

console.log(square([1, 2, 3])); // [1, 4, 9]
console.log(square([6, 8, -6, -8, 1])); // [36, 64, 36, 64, 1]
console.log(square([])); // []
console.log(square([12])); // [144]
console.log(square([5, 10])); // [25, 100]
console.log(square([6, -3, 12, 23, 4, 1, 19, 11, 2, 3, 2])); // [36, 9, 144, 529, 16, 1, 361, 121, 4, 9, 4]

