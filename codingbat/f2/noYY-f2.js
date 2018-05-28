{
  function noYY(arr){
     return arr.map(e => e+"y")
               .filter(e=> {
                             if (!(e.includes("yy")))
                                return e;
                           });
  }

  console.log(noYY(["a", "b", "cy"])); // → ["ay", "by", "cy"]
}