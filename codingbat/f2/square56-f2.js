{

  function square56(arr) {
    return arr.map(e => e*e+10)
              .filter(e => {
                            if (e%10 != 5 && e%10 != 6)
                               return e;
      
                           });
  }

  console.log(square56([3, 1, 4])); // → [19, 11]
  console.log(square56([1])); // → [11]
  console.log(square56([2])); // → [14]

}