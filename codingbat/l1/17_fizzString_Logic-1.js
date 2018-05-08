/* 
Problem:
	Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged. (See also: FizzBuzz Code)
*/
function fizzString  (str) {
  
  
  if(str.startsWith("f") && str.endsWith("b")) return "FizzBuzz";
  else if(str.startsWith("f")) return "Fizz";
  else if(str.endsWith("b")) return "Buzz";
  else return str;
  
}  
  

console.log(fizzString("fig") ); // "Fizz"
console.log(fizzString("dib") ); // "Buzz"
console.log(fizzString("fib") ); // "FizzBuzz"
console.log();

console.log(fizzString("abc") ); // "abc"
console.log(fizzString("fooo") ); // "Fizz"
console.log(fizzString("booo") ); // "booo"
console.log();

console.log(fizzString("ooob") ); // "Buzz"
console.log(fizzString("fooob") ); // "FizzBuzz"
console.log(fizzString("f") ); // "Fizz"
console.log();

console.log(fizzString("b") ); // "Buzz"
console.log(fizzString("abcb") ); // "Buzz"
console.log(fizzString("Hello") ); // "Hello"
console.log();

console.log(fizzString("Hellob") ); // "Buzz"
console.log(fizzString("af") ); // "af"
console.log(fizzString("bf") ); // "bf"
console.log();

console.log(fizzString("fb") ); // "FizzBuzz"

