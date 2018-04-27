function xyzMiddle(str) {
    var i=0;
    while(str.indexOf("xyz",i) != -1){
        i = str.indexOf("xyz",i);
        var first = (str.substring(0,i)).length;
        var last  = (str.substring(i+3)).length;
        if(Math.abs(first-last)<=1) return true;

       i++;
    }
return false;
}

console.log(xyzMiddle("AAxyzBB")); // true
console.log(xyzMiddle("AxyzBB")); // true
console.log(xyzMiddle("AxyzBBB")); // false
console.log(xyzMiddle("AxyzBBBB")); // false
console.log(xyzMiddle("AAAxyzB")); // false
console.log(xyzMiddle("AAAxyzBB")); // true
console.log(xyzMiddle("AAAAxyzBB")); // false
console.log(xyzMiddle("AAAAAxyzBBB")); // false
console.log(xyzMiddle("1x345xyz12x4")); // true
console.log(xyzMiddle("xyzAxyzBBB")); // true
console.log(xyzMiddle("xyzAxyzBxyz")); // true
console.log(xyzMiddle("xyzxyzAxyzBxyzxyz")); // true
console.log(xyzMiddle("xyzxyzxyzBxyzxyz")); // true
console.log(xyzMiddle("xyzxyzAxyzxyzxyz")); // true
console.log(xyzMiddle("xyzxyzAxyzxyzxy")); // false
console.log(xyzMiddle("AxyzxyzBB")); // false
console.log(xyzMiddle("")); // false
console.log(xyzMiddle("x")); // false
console.log(xyzMiddle("xy")); // false
console.log(xyzMiddle("xyz")); // true
console.log(xyzMiddle("xyzz")); // true


