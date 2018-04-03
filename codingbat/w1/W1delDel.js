function delDel(str) {
    if(str.substring(1,4)== "del"){
        return str[0]+ str.substring(4, str.length);
    }
    return str;
}

console.log(delDel("adelbc"));
console.log(delDel("adelHello"));
console.log(delDel("adedbc"));
console.log(delDel("ac"));

