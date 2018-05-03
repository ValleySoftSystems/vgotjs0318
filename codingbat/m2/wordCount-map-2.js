
{ // To make the variable 'map' local to this file

  function wordCount(arr) {
    let map = new Map();
    for (let i=0;i<arr.length;i++) {
      
      if (!map.has(arr[i])) {
          map.set(arr[i], 1);
      } else {
          map.set(arr[i], (map.get(arr[i]))+1);
      }
    }
    return map;   
  }
    console.log(wordCount(["a", "b", "a", "c", "b"])); // → {"a": 2, "b": 2, "c": 1}
    console.log(wordCount(["c", "b", "a"])); // → {"a": 1, "b": 1, "c": 1}
    console.log(wordCount(["c", "c", "c", "c"])); // → {"c": 4}
}