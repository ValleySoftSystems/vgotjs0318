//Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


/*function spinWords(str) {
    var str = str.split(' ');
   for(var i=0; i<str.length; i++){
       if(str[i].length >= 5){
           str[i] = str[i].split('').reverse().join('');
       }

   }
   return str.join(' ');

}*/


function spinWords(str) {
    return str.split(' ').map(function(word){
        return word.length >=5 ? word.split('').reverse().join('') : word;
    }).join(' ');
}




console.log(spinWords("Hey fellow warriors"));