/*solution to http://codingbat.com/prob/p171896

Problem: 
  Given a string name, e.g. "Bob", return a greeting of the form 
  "Hello Bob!".
  
Notes:
  
  use + operator to combine the words with the given string
  
  
*/

function helloName (str) {
 
   
  return "Hello " + str + "!";
 
} 
 

console.log( helloName("Bob") ); //→ "Hello Bob!"
console.log( helloName("Alice") ); //→ "Hello Alice!"
console.log( helloName("X") ); //→  "Hello X!"

console.log( helloName("Dolly") ); //→ "Hello Dolly!"
console.log( helloName("Alpha") ); //→  "Hello Alpha!"
console.log( helloName("Omega") ); //→  "Hello Omega!"

console.log( helloName("Goodbye") ); //→  "Hello Goodbye!"
console.log( helloName("ho ho ho") ); //→ "Hello ho ho ho!"
console.log( helloName("xyz!") ); //→ "Hello xyz!!"

console.log( helloName("Hello") ); //→  "Hello Hello!"