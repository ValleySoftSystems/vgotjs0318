//var numbers = [4, 2, 5, 1, 3];
function findNthLargest(list, n) {
   /* list.sort(function (a, b) {
        return a - b;
    });*/
   if(list.length == 0) return null;

   list.sort(function (a, b) {
        return b - a;
    });
   return n>0 ? list[n]: list[0];

    //console.log(list);
}

console.log(findNthLargest([1,19,22,59,33,87,86],-2));
console.log(findNthLargest([],2));