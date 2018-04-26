function extraFront(str) {
    if(str.length<2){
        var  first = str;
    } else{
        first = str.substring(0,2);
    }
    return first+first+first;
}

console.log(extraFront("Hello")); // "HeHeHe"
console.log(extraFront("ab")); // "ababab"
console.log(extraFront("H")); //"HHH"
console.log(extraFront("")); //""
console.log(extraFront("Candy")); //"CaCaCa"
console.log(extraFront("Code")); // "CoCoCo"


