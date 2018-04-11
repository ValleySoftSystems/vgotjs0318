var myData = [];
function mySort(num) {
  if (typeof(num) === "number") {
    var len = myData.length;
    var temp = 0;

    if (myData.length == 0) {
      myData.push(num);
    }  
    else {
      for(let i=0; i<len; i++) {
        if (num < myData[i]) {
            myData.splice(i, 0, num);
            break;
          } else if (num >= myData[len-1]) {
              myData.push(num);
              break
          }    

      }
    }    
    return myData;
  }   
} 

console.log(mySort(18));
console.log(mySort(13));
console.log(mySort(17));
console.log(mySort(11));
console.log(mySort(10));
console.log(mySort(19));
console.log(mySort(12));
console.log(mySort(16));
console.log(mySort(15));
console.log(mySort({}));
console.log(mySort([]));
console.log(mySort("a"));
console.log(mySort());