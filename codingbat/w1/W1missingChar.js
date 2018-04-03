function missingChar(str, n) {

    front = str.substring(0,n);
    back = str.substring(n+1, str.length);

    return front + back;
}

console.log(missingChar("kitten", 1));

console.log(missingChar("kitten", 0));

console.log(missingChar("kitten", 4));