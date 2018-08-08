//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
   return str.split(' ').map(function(word){
       if(word === '!' ||  word === '?') {
           return word.substring(1) + word.charAt(0);
       }else{
           return word.substring(1) + word.charAt(0) + 'ay';
       }
   }).join(' ');
}

console.log(pigIt('Pig latin is cool'));

console.log(pigIt("O tempora o mores !"));