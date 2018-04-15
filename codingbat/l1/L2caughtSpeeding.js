function caughtSpeeding(speed, isBirthday) {
   if(!isBirthday){
       if(speed<=60){
           return 0;
       }else if(speed>=61 && speed<=80){
           return 1;
       }else return 2;
   }else {
       if (speed <= 65) {
           return 0;
       } else if (speed >= 66 && speed <= 85) {
           return 1;
       } else return 2;
   }
}

console.log(caughtSpeeding(60, false)); // 0
console.log(caughtSpeeding(65, false)); // 1
console.log(caughtSpeeding(65, true)); // 0
console.log(caughtSpeeding(80, false)); // 1
console.log(caughtSpeeding(85, false)); // 2
console.log(caughtSpeeding(85, true)); // 1
console.log(caughtSpeeding(70, false)); // 1
console.log(caughtSpeeding(75, false)); // 1
console.log(caughtSpeeding(75, true)); // 1
console.log(caughtSpeeding(40, false)); // 0
console.log(caughtSpeeding(40, true)); // 0
console.log(caughtSpeeding(90, false)); // 2
