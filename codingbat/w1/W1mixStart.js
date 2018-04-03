function mixStart(str){
    if(str.substring(1,3)=="ix"){
        return true;
    }
    return false;
}

console.log(mixStart("mix snacks"));
console.log(mixStart("pix snacks"));
console.log(mixStart("piz snacks"));
console.log(mixStart("nix"));
console.log(mixStart("ni"));
console.log(mixStart("n"));
console.log(mixStart(""));

