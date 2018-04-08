//Given an array of numbers and n, 
//write a function to return nth largest value in that array.
//If n is invalid, return the largest of that array.
//For all error situations, return null.
//Apart from returning the value, the function should log result.


//null ??
//try catch for error ??


function findMax(list) {
  return Math.max.apply(null, list); 
}

function makeNth(n) {
  if (n === 1 || n === 21) {
    return "st";
  }
  if (n === 2 || n === 22) {
    return "nd";
  }
  if (n === 3 || n === 23) {
    return "rd";
  } else if (n>=4) {
      return "th";
  }
  return "";
}

function findKthLargest(list, n) {
  
  if (!list || !list.length || !Array.isArray(list)) {
    console.log(`null    :   ${n}${makeNth(n)} largest in [${list}]`);
    return null;
  }
  
  if (isNaN(n) || Number.isNaN(n) || !n || !Number.isInteger(n) || n<0 || n>list.length) {
    console.log(`${findMax(list)}    :   ${n}${makeNth(n)} largest in [${list}]`);
    return Math.max.apply(null, list);
  }
  
  if (n===0) {
    console.log(`${findMax(list)}    :   ${n}${makeNth(n)} largest in [${list}]`);
    return `${findMax(list)}`;
  }
  
  var mainList = list.slice();
  for (let i=0; i<n; i++) {
    var max = findMax(list);
    var nthMax = list.splice(list.indexOf(max),1); 
  } 
  console.log(`${nthMax}    :   ${n}${makeNth(n)} largest in [${mainList}]`);
  return nthMax;
 
}
    findKthLargest([],2);
    findKthLargest(null,2);
    findKthLargest([1],0);
    findKthLargest([1,19,22,59,33,87,86],0);
    findKthLargest([1,19,22,59,33,87,86],null);
    findKthLargest([1,19,22,59,33,87,86]);
    findKthLargest([1],1);
    findKthLargest([1,2],1);
    findKthLargest([1,2],2);
    findKthLargest([2,1],1);
    findKthLargest([2,1],2);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],-22);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],-1);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],0);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],1);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],2);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],3);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],4);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],5);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],6);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],7);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],8);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],9);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],10);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],11);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],12);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],13);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],14);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],15);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],16);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],17);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],18);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],19);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],20);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],21);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],22);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],23);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],24);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],25);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],100);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],50);
    findKthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],99);