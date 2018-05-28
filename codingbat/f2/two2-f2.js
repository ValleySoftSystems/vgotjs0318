{

  function two2(arr) {
      return arr.map(e => e*2).filter(e=>{
        if (e%10 != 2)
          return e;
      });
  }

  console.log(two2([1, 2, 3])); // → [4, 6]
  console.log(two2([2, 6, 11])); // → [4]
  console.log(two2([0])); // → [0]

}