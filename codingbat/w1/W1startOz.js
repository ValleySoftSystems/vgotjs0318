function startOz(str) {
   /* if (str.substring(0, 2) == "oz") {
        return str.substring(0, 2);
    } else if ((str[0] == "o") || (str[0] == "z")) {
        return str[0];
    } else if ((str[1] == "o") || (str[1] == "z")) {
        return str[1];
    } else
        return str; */

   result = "";
   if(str.length >= 1 && str[0]=="o"){
       result = result + str[0];
   }
   if(str.length >=2 && str[1]=="z"){
       result = result + str[1];
   }
   return result;
}

console.log(startOz("ozymandias"));
console.log(startOz("bzoo"));
console.log(startOz("oox"));
console.log(startOz("oz"));
console.log(startOz("ounce"));
console.log(startOz("o"));
console.log(startOz("abc"));
console.log(startOz(""));
console.log(startOz("zoo"));
console.log(startOz("aztec"));
console.log(startOz("zzzz"));
console.log(startOz("oznic"));


