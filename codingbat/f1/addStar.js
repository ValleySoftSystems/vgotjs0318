function addStar(list) {
    return list.map(x => x+'*');
}

console.log(addStar(["a", "bb", "ccc"])); // ["a*", "bb*", "ccc*"]
console.log(addStar(["hello", "there"])); // ["hello*", "there*"]
console.log(addStar(["*"])); // ["**"]
console.log(addStar([])); // []
console.log(addStar(["kittens", "and", "chocolate", "and"])); // ["kittens*", "and*", "chocolate*", "and*"]
console.log(addStar(["empty", "string", ""])); // ["empty*", "string*", "*"]

