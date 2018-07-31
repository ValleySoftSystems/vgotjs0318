function doubling(list) {
    return list.map(x => x * 2);
}


console.log(doubling([1, 2, 3])); // [2, 4, 6]);
console.log(doubling([6, 8, 6, 8, -1])); // [12, 16, 12, 16, -2]);
console.log(doubling([])); // []);
console.log(doubling([5])); // [10]);
console.log(doubling([5, 10])); // [10, 20]);
console.log(doubling([8, -5, 7, 3, 109])); // [16, -10, 14, 6, 218]);
console.log(doubling([6, -3, 12, 23, 4, 1, 19, 11, 2, 3, 2])); // [12, -6, 24, 46, 8, 2, 38, 22, 4, 6, 4]);
console.log(doubling([3, 1, 4, 1, 5, 9])); // [6, 2, 8, 2, 10, 18]);