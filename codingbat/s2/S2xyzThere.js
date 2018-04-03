/*******************************/
function xyzThere(str) {

    for (var i = 0; i < str.length-2; i++) {
        if (str.substring(i, i+3) == "xyz") {

            if (i == 0 || str[i - 1] != ".") {
                return true;
            }
        }
    }
    return false;
}

console.log(xyzThere("abcxyz")); //t
console.log(xyzThere("abc.xyz")); //f
console.log(xyzThere("xyz.abc")); //t
console.log(xyzThere("abcxy")); //f
console.log(xyzThere("xyz")); //t
console.log(xyzThere("xy")); //f
console.log(xyzThere("x")); //f
console.log(xyzThere("")); //f
console.log(xyzThere("abc.xyzxyz")); //t
console.log(xyzThere("abc.xxyz")); //t
console.log(xyzThere(".xyz")); //f
console.log(xyzThere("12.xyz")); //f
console.log(xyzThere("12xyz")); //t
console.log(xyzThere("1.xyz.xyz2.xyz")); //f