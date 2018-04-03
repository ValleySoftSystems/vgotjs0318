
function monkeyTrouble(aSmile, bSmile) {
    if(aSmile && bSmile){
        return true;
    }
    if(!aSmile && !bSmile){
        return true;
    }
    return false;

}

result = monkeyTrouble(false,false);
console.log(result);

