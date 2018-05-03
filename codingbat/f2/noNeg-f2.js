{

  function noNeg(arr) {
      return arr.filter(e => e >= 0);
  }

  console.log(noNeg([-3, -3, 3, 3])); // → [3, 3]
}