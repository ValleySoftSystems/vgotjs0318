function wordCount(arr) {
  /************** using reduce function **********/
 /*   var countInstance = arr.reduce(function(allWord, word){
        if(word in allWord){
            allWord[word]++;
        }else{
            allWord[word] = 1;
        }
      return allWord;
    }, {});
 return countInstance;
*/

 /***** using Map *********/

 var map = new Map();
 for(var i=0; i<arr.length; i++){
     if(map.has(arr[i])){
         map.set(arr[i], map.get(arr[i])+1);
     }else{
         map.set(arr[i], 1);
     }
 }
 return map;

}

console.log(wordCount(["a", "b", "a", "c", "b"])); // {"a": 2, "b": 2, "c": 1}
console.log(wordCount(["c", "b", "a"])); // {"a": 1, "b": 1, "c": 1}
console.log(wordCount(["c", "c", "c", "c"])); // {"c": 4}
console.log(wordCount([])); // {}
console.log(wordCount(["this", "and", "this", ""])); // {"": 1, "and": 1, "this": 2}
console.log(wordCount(["x", "y", "x", "Y", "X"])); // {"x": 2, "X": 1, "y": 1, "Y": 1}
console.log(wordCount(["123", "0", "123", "1"])); // {"0": 1, "1": 1, "123": 2}
console.log(wordCount(["d", "a", "e", "d", "a", "d", "b", "b", "z", "a", "a", "b", "z", "x", "b", "f", "x", "two", "b", "one", "two"])); // {"a": 4, "b": 5, "d": 3, "e": 1, "f": 1, "one": 1, "x": 2, "z": 2, "two": 2}
console.log(wordCount(["apple", "banana", "apple", "apple", "tea", "coffee", "banana"])); // {"banana": 2, "apple": 3, "tea": 1, "coffee": 1}
