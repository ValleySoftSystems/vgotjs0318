function bobThere(str) {

    for(var i=0; i<str.length;i++){
        if(str[i]=="b" && str[i+2]=="b"){
            return true;
        }
    }
 return false;
}

console.log(bobThere("abcbob")); //t
console.log(bobThere("b9b")); //t
console.log(bobThere("bac")); //f
console.log(bobThere("bbb")); //t
console.log(bobThere("abcdefb")); //f
console.log(bobThere("123abcbcdbabxyz")); //t
console.log(bobThere("b12")); //f
console.log(bobThere("b1b")); //t
console.log(bobThere("b12b1b")); //t
console.log(bobThere("bbc"));  //f
console.log(bobThere("bbb")); //t
console.log(bobThere("bb")); //f
console.log(bobThere("b")); //f