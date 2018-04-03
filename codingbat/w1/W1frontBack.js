function frontBack(str) {
    if (str.length <= 1){
        return str;
    }
    front = str[0];
    last = str[str.length - 1];
    middle = str.substring(1, str.length - 1);

    return last + middle + front;
}

console.log(frontBack("code"));

console.log(frontBack("a"));

console.log(frontBack("ab"));