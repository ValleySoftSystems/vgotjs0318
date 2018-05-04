/***************************************/

function wordAppend(arr) {
    var map = new Map();
    var resultString = "";
    for(var i=0; i<arr.length; i++){

        if(map.has(arr[i])){
            var val = map.get(arr[i]);
            val++;
            if(val%2==0){
                resultString += arr[i];
            }
            map.set(arr[i], val);
        }else{
            map.set(arr[i], 1);
        }
    }
  return resultString;
}

console.log(wordAppend(["a", "b", "a"])); // "a"
console.log(wordAppend(["a", "b", "a", "c", "a", "d", "a"])); // "aa"
console.log(wordAppend(["a", "", "a"])); // "a"
console.log(wordAppend([])); // ""
console.log(wordAppend(["a", "b", "b", "a", "a"])); // "ba"
console.log(wordAppend(["a", "b", "b", "b", "a", "c", "a", "a"])); // "baa"
console.log(wordAppend(["a", "b", "b", "b", "a", "c", "a", "a", "a", "b", "a"])); // "baaba"
console.log(wordAppend(["not", "and", "or", "and", "this", "and", "or", "that", "not"])); // "andornot"
console.log(wordAppend(["a", "b", "c"])); // ""
console.log(wordAppend(["this", "or", "that", "and", "this", "and", "that"])); // "thisandthat"
console.log(wordAppend(["xx", "xx", "yy", "xx", "zz", "yy", "zz", "xx"])); // "xxyyzzxx"

