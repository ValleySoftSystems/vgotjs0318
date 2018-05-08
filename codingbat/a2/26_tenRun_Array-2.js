/* 
Problem:
  
 For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.
   
*/

function tenRun (nums) {
  
  var result = new Array(nums.length);
  
  for (var i = 0; i < nums.length; i++) {
    
     console.log(`i is : ${i}`);
    
      if(nums[i] % 10 == 0  && nums[i + 1] % 10 != 10) {
          if (nums[i] != nums[i+1]) {
            result[i] = nums[i]; 
          } else{
            result[i + 2] = nums[i + 1];  
          }
          
          console.log(result);
          
      } else if(nums[i] % 10 == 0 && !(nums[i + 1] % 10 == 0)) {
          
          result[i + 1] = nums[i];
          console.log(result);
          
      } 
          
          
  }
    
  return result;
}

//== 0 && num[i]!= num[i + 1]) 


console.log(tenRun([2, 10, 3, 4,  20, 5]) ); // [2, 10, 10, 10, 20, 20]
/*console.log(tenRun([10, 1, 20, 2]) ); // [10, 10, 20, 20]
console.log(tenRun([10, 1, 9, 20]) ); // [10, 10, 10, 20]
console.log();

console.log(tenRun([1, 2, 50, 1]) ); // [1, 2, 50, 50]
console.log(tenRun([1, 20, 50, 1]) ); // [1, 20, 50, 50]
console.log(tenRun([10, 10]) ); // [10, 10]



*/