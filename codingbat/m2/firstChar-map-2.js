
{ // To make the variable 'map' local to this file

  function firstChar(arr) {
    let map = new Map();
    
    for (let i=0;i<arr.length;i++) {
  
      if (!map.has(arr[i].substr(0,1))) {
          map.set(arr[i].substr(0,1), arr[i]);
      } else {
          map.set(arr[i].substr(0,1), map.get(arr[i].substr(0,1))+arr[i]);
      }
    }
    return map;   
  }
    console.log(firstChar(["salt", "tea", "soda", "toast"])); // → {"s": "saltsoda", "t": "teatoast"}
    console.log(firstChar(["aa", "bb", "cc", "aAA", "cCC", "d"])); // → {"a": "aaaAA", "b": "bb", "c": "cccCC", "d": "d"}
    console.log(firstChar([])); // → {}
  
}