function lower(list) {
    return list.map(x => x.toLowerCase());
}

console.log(lower(["Hello", "Hi"])); // ["hello", "hi"]
console.log(lower(["AAA", "BBB", "ccc"])); // ["aaa", "bbb", "ccc"]
console.log(lower(["KitteN", "ChocolaTE"])); // ["kitten", "chocolate"]
console.log(lower([])); // []
console.log(lower(["EMPTY", ""])); // ["empty", ""]
console.log(lower(["aaX", "bYb", "Ycc", "ZZZ"])); // ["aax", "byb", "ycc", "zzz"]

