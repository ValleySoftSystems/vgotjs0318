//Simple, given a string of words, return the length of the shortest word(s).

function shortestWord(str) {
    var str = str.split(' ');
    var len = str.map(function(word){
        return word.length;
    });

    return Math.min.apply(null, len);
}


console.log(shortestWord("bitcoin take over the world maybe who knows perhaps"));