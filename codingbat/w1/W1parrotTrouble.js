function parrotTrouble(talking, hour){
    if(((hour<7) || (hour>20)) && talking){
        return true;
    }
    return false;    //If we remove return false, function returns "undefined"
}

console.log(parrotTrouble(true,6));

console.log(parrotTrouble(true,7));

console.log(parrotTrouble(false,6));

console.log(parrotTrouble(true,21));
