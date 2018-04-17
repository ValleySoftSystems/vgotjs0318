/* 
Problem:
	Given an int n, return the string form of the number followed by "!". So the int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz". 
*/
function fizzString2 (n) {
  
  if(n % 3 == 0 && n % 5 == 0) return "FizzBuzz" + "!";
  
  else if(n % 3 == 0) return "Fizz" + "!";
  
  else if(n % 5 == 0) return "Buzz" + "!";
  
  else return n + "!";
}  
  

console.log(fizzString2(1) ); // "1!"
console.log(fizzString2(2) ); // "2!"
console.log(fizzString2(3) ); // "Fizz!"
console.log();

console.log(fizzString2(4) ); // "4!"
console.log(fizzString2(5) ); // "Buzz!"
console.log(fizzString2(6) ); // "Fizz!"
console.log();

console.log(fizzString2(7) ); // "7!"
console.log(fizzString2(8) ); // "8!"
console.log(fizzString2(9) ); // "Fizz!"
console.log();

console.log(fizzString2(15) ); // "FizzBuzz!"
console.log(fizzString2(16) ); // "16!"
console.log(fizzString2(18) ); // "Fizz!"
console.log();

console.log(fizzString2(19) ); // "19!"
console.log(fizzString2(21) ); // "Fizz!"
console.log(fizzString2(44) ); // "44!"
console.log();

console.log(fizzString2(45) ); // "FizzBuzz!"
console.log(fizzString2(100) ); // "Buzz!"



