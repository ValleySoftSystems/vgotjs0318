function stringE(str) {
    var count = 0;
    for(var i=0; i<=str.length; i++){
        if(str[i]=='e'){
            count += 1;
        }
    }

    if(count>=1 && count<=3) return true;
    return false;
}

console.log(stringE("Hello"));
console.log(stringE("Heelle"));
console.log(stringE("Heelele"));
console.log(stringE("Hll"));
console.log(stringE("e"));
console.log(stringE(""));
