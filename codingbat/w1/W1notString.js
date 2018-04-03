
function notString(str) {
    substr = str.substring(0, 3);
    if (substr == "not"){
        return str;
    }
    return "not " + str;
    
}

console.log(notString("candy"));

console.log(notString("x"));

console.log(notString("not bad"));

