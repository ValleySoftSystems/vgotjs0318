function math1(list){
    return list.map(x => (x+1)*10);
}

console.log(math1([1, 2, 3])); // [20, 30, 40]
console.log(math1([6, 8, 6, 8, 1])); // [70, 90, 70, 90, 20]
console.log(math1([10])); // [110]
console.log(math1([])); // []
console.log(math1([5, 10])); // [60, 110]
console.log(math1([-1, -2, -3, -2, -1])); // [0, -10, -20, -10, 0]
console.log(math1([6, -3, 12, 23, 4, 1, 19, 11, 2, 3, 2])); // [70, -20, 130, 240, 50, 20, 200, 120, 30, 40, 30]
