function nearTen(num) {
   return num%10==0 || (num+1)%10==0 || (num+2)%10==0 || (num-1)%10==0 || (num-2)%10==0 ;
}

console.log(nearTen(12)); // true
console.log(nearTen(17)); // false
console.log(nearTen(19)); // true
console.log(nearTen(31)); // true
console.log(nearTen(6)); // false
console.log(nearTen(10)); // true
console.log(nearTen(11)); // true
console.log(nearTen(21)); // true
console.log(nearTen(22)); // true
console.log(nearTen(23)); // false
console.log(nearTen(54)); // false
console.log(nearTen(155)); // false
console.log(nearTen(158)); // true
console.log(nearTen(3)); // false
console.log(nearTen(1)); // true

