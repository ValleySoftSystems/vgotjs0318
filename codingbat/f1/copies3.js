function copies3(list) {
    return list.map(x => x+x+x);
}

console.log(copies3(["a", "bb", "ccc"])); // ["aaa", "bbbbbb", "ccccccccc"]
console.log(copies3(["24", "a", ""])); // ["242424", "aaa", ""]
console.log(copies3(["hello", "there"])); // ["hellohellohello", "theretherethere"]
console.log(copies3(["no"])); // ["nonono"]
console.log(copies3([])); // []
console.log(copies3(["this", "and", "that", "and"])); // ["thisthisthis", "andandand", "thatthatthat", "andandand"]

