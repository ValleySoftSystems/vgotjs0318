function endUp(str) {
    if(str.length <=3) return str.toUpperCase();
    var middleStr = str.length - 3;
    var front = str.substring(0,middleStr);
    var back = str.substring(middleStr,str.length);  //end part is optional

    return front + back.toUpperCase();
}

console.log(endUp("Hello"));
console.log(endUp("hi there"));
console.log(endUp("hi"));
console.log(endUp("woo hoo"));
console.log(endUp("xyz12"));
console.log(endUp("x"));
console.log(endUp(""));
