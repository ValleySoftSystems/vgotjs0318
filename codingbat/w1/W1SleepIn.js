
function sleepIn(weekday, vacation) {
    if(!weekday || vacation){
        return true;
    }
    return false;

}

result = sleepIn(false,false);
console.log(result);

result = sleepIn(true,false);
console.log(result);

result = sleepIn(false,true);
console.log(result);