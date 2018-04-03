//First get the bigger value in a
//check for range


function max1020(a,b) {
   if(b>a){
       temp = a;
       a=b;
       b=temp;
   }
   if(a>=10 && a<=20) return a;
   if(b>=10 && b<=20) return b;
   return 0;
}

console.log(max1020(11,19));
console.log(max1020(19,11));
console.log(max1020(11,9));

console.log(max1020(9,21));
console.log(max1020(10,21));
console.log(max1020(21,10));

console.log(max1020(9,11));
console.log(max1020(23,10));
console.log(max1020(20,10));

console.log(max1020(7,20));
console.log(max1020(17,16));