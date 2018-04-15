function alarmClock(day, isVacation) {

    if((day>=1 && day<=5)&&(!isVacation)){
        return "7:00";
    }else if(((day==0 || day==6)&&(!isVacation))||((day>=1 && day<=5)&&(isVacation))){
        return "10:00";
    }else return "off";
}

console.log(alarmClock(1, false)); // "7:00"
console.log(alarmClock(5, false)); // "7:00"
console.log(alarmClock(0, false)); // "10:00"
console.log(alarmClock(6, false)); // "10:00"
console.log(alarmClock(0, true)); // "off"
console.log(alarmClock(6, true)); // "off"
console.log(alarmClock(1, true)); // "10:00"
console.log(alarmClock(3, true)); // "10:00"
console.log(alarmClock(5, true)); // "10:00"
