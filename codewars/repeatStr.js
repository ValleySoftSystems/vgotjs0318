//Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr(n, str) {
    var res = "";
    for(var i=0; i<n; i++){
        res += str;
    }
    return res;

    //USING repeat function
   // return str.repeat(n);
}


console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha"));
