/*Given an array of numbers and n, write a function to return nth largest value in that array.
  If n is invalid, return the largest of that array.
  For all error situations, return null.
  Apart from returning the value, the function should log result.*/

//Not using sort() method

function getSortedArray(data) {
    var max = 0;
    for (var i = 0; i < data.length-1; i++) {
        var maxIdx = 0;
        var swap = false;
        max = data[i];
        for (var j = i + 1; j < data.length; j++) {
            if (data[j] > max) {
                swap = true;
                max = data[j];
                maxIdx = j;
            }
        }
        if (swap){
            var temp = data[i];
            data[i] = max;
            data[maxIdx] = temp; }
    }
    return data;
}

function findNthLargest(list, n) {
    //var oldList = list.slice(0);  //making shallow copy of original list

    if(list === null || list.length == 0 ){
        return (`null : ${n} largest in [${list}]`);
    }
    var oldList = list.slice(0);  //making shallow copy of original list
    var newList = getSortedArray(list);

    var result = 0;
    if(n === null || n === undefined) {
        return (`${newList[0]} : ${n} largest in [${list}]`);
    }

    if(n<=0 || n==1 || n>list.length) {
        result = newList[0];
    }

    if(n>1 && n<=list.length) {
        result = newList[n - 1];
    }

    var lastN = n.toString().slice(-1);  //convert n to string and slice last char

    if(lastN == 1) {
        return (`${result} : ${n}st largest in [${oldList}]`);
    }

    if(lastN == 2) {
        return (`${result} : ${n}nd largest in [${oldList}]`);
    }

    if(lastN == 3) {
        return (`${result} : ${n}rd largest in [${oldList}]`);
    }

    if(lastN == 0 || lastN >= 4) {
        return (`${result} : ${n}th largest in [${oldList}]`);
    }

}

console.log(findNthLargest([],2));
console.log(findNthLargest(null,2));
console.log(findNthLargest([1],0));
console.log(findNthLargest([1,19,22,59,33,87,86],0));
console.log(findNthLargest([1,19,22,59,33,87,86],null));
console.log(findNthLargest([1,19,22,59,33,87,86]));
console.log(findNthLargest([1],1));
console.log(findNthLargest([1,2],1));
console.log(findNthLargest([1,2],2));
console.log(findNthLargest([2,1],1));
console.log(findNthLargest([2,1],2));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],-22));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],-1));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],0));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],1));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],2));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],3));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],4));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],5));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],6));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],7));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],8));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],9));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],10));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],11));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],12));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],13));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],14));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],15));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],16));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],17));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],18));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],19));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],20));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],21));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],22));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],23));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],24));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],25));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],100));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],50));
console.log(findNthLargest([1,19,22,59,33,87,86,91,0,-1,-23,3,45,6,2,8,9],99));