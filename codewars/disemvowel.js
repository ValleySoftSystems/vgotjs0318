//Remove all vowels from the given string

function disemvowel(str) {
    var res = "";
    for(var i=0; i<str.length; i++){
        console.log(str[i]);
        if(str[i]!== 'a' && str[i]!== 'e'&& str[i]!== 'i' && str[i]!== 'o' && str[i]!== 'u'
            && str[i]!== 'A' && str[i]!== 'E'&& str[i]!== 'I' && str[i]!== 'O' && str[i]!== 'U' )
        {
            res += str[i];
        }
    }

   return res;

    /******************************************************/
    //USING replace function
   /* return str.replace(/[aeiou]/g, '')*/
}




console.log(disemvowel("This website is for losers LOL!"));