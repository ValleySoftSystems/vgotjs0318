function scoresIncreasing(arr){
  let flag = true;
  
  for (let i=0; i<arr.length-1; i++) {
    if (!(arr[i] <= arr[i+1])) {
        flag = false;
        break;
    }
  } 
  return flag;

}
console.log(scoresIncreasing([1, 3, 4])); // → true
console.log(scoresIncreasing([1, 3, 2])); // → false
console.log(scoresIncreasing([1, 1, 4])); // → true