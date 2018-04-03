
function stringSplosion(str){
 //var i =0;
 var result = "";
 for(var n=0; n<=str.length; n++){
     result = result + str.substring(0,n);
 }
 return result;
}

console.log(stringSplosion("Code"));
console.log(stringSplosion("abc"));
console.log(stringSplosion("ab"));
console.log(stringSplosion("x"));
console.log(stringSplosion("fade"));
console.log(stringSplosion("There"));
console.log(stringSplosion("Kitten"));
console.log(stringSplosion("Bye"));
console.log(stringSplosion("Good"));
console.log(stringSplosion("Bad"));
