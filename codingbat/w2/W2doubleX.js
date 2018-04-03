function doubleX(str) {
    var i = str.indexOf("x");
    //console.log(i);
   // console.log(str.length)
    if(i == -1) return false; // no "x" at all

    if(i+1 >= str.length) return false; //check i+1 in bounds

    if (str.substring(i, i+2) == "xx"){
        return true;
    }return false;


}


console.log(doubleX("axxbb"));
console.log(doubleX("axaxax"));
console.log(doubleX("xxxxx"));
console.log(doubleX("xaxxx"));
console.log(doubleX("aaaax"));
console.log(doubleX(""));
console.log(doubleX("abc"));
console.log(doubleX("x"));
console.log(doubleX("xx"));
console.log(doubleX("xax"));
console.log(doubleX("xaxx"));