function scores100(arr){
  let flag = false;
  
  for (let i=0; i<arr.length-1; i++) {
    if ((arr[i]==100 && arr[i+1]==100)) {
        flag = true;
        break;
    }
  } 
  return flag;

}
console.log(scores100([1, 100, 100])); // → true
console.log(scores100([1, 100, 99, 100])); // → false
console.log(scores100([100, 1, 100, 100])); // → true