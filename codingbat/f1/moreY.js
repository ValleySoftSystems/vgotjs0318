function moreY(list) {
    return list.map(x => 'Y'+x+'Y');
}

console.log(moreY(["a", "b", "c"])); // ["yay", "yby", "ycy"]
console.log(moreY(["hello", "there"])); // ["yhelloy", "ytherey"]
console.log(moreY(["yay"])); // ["yyayy"]
console.log(moreY(["", "a", "xx"])); // ["yy", "yay", "yxxy"]
console.log(moreY([])); // []
console.log(moreY(["xx", "yy", "zz"])); // ["yxxy", "yyyy", "yzzy"]

