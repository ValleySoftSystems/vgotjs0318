function startHi(str) {
    if(str.substring(0,2)=="hi"){
        return true;
    }
    return false;
}

console.log(startHi("hi there"));

console.log(startHi("hi"));

console.log(startHi("hello hi"));
