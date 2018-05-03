{ // To make the variable 'map' local to this file

  function pairs(arr) {
    let map = new Map();
    for (let i=0;i<arr.length;i++) {
      map.set(arr[i][0], arr[i][arr[i].length-1]);
    }
    return map;   
  }

  console.log(pairs(["code", "bug"])); // → {"b": "g", "c": "e"}
  console.log(pairs(["man", "moon", "main"])); // → {"m": "n"}
  console.log(pairs(["man", "moon", "good", "night"])); // → {"g": "d", "m": "n", "n": "t"}
}  