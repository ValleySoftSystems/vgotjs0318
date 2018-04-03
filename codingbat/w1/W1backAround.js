function backAround(str) {

    return str[str.length-1] + str + str[str.length-1];

}

console.log(backAround("cat"));

console.log(backAround("Hello"));

console.log(backAround("a"));