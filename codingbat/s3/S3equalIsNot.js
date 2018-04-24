function equalIsNot(str) {
    var count1 = 0, count2 = 0;
    for(var i=0; i<str.length; i++){
        if(str[i]=="i" && str[i+1]=="s") count1++;

        if(str[i]=="n" && str[i+1]=="o" && str[i+2]=="t") count2++;
    }
return count1 == count2;
}


//console.log(equalIsNot("isisnotno7Not")); // false

console.log(equalIsNot("This is not")); // false
console.log(equalIsNot("This is notnot")); // true
console.log(equalIsNot("noisxxnotyynotxisi")); // true
console.log(equalIsNot("noisxxnotyynotxsi")); // false
console.log(equalIsNot("xxxyyyzzzintint")); // true
console.log(equalIsNot("")); // true
console.log(equalIsNot("isisnotnot")); // true
console.log(equalIsNot("isisnotno7Not")); // false
console.log(equalIsNot("isnotis")); // false
console.log(equalIsNot("mis3notpotbotis")); // false
