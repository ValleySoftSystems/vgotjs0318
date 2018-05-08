/* 
Problem:
	Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

Notes:
	
*/
function sum67 (nums) {

  var sum = 0,temp;
  
  var index = nums.indexOf(7);
  
  for(var i = 0;i < nums.length;i++) {
    
    if(nums[i] == 6 ) {
      if(nums[i+1]!=7){
        
        sum-=nums[i];
      }
      
    } 
    else {
      sum+= nums[i];
    }
    
    
  }
    
  return sum;
}


//console.log(sum67([1, 2, 2])); // 5
console.log(sum67([1, 2, 2, 6, 99, 99, 7]) ); // 5
console.log(sum67([1, 1, 6, 7, 2])); //4
console.log();

/*console.log(sum67([1, 6, 2, 2, 7, 1, 6, 99, 99, 7])); //2
console.log(sum67([1, 6, 2, 6, 2, 7, 1, 6, 99, 99, 7])); //2
console.log(sum67([2, 7, 6, 2, 6, 7, 2, 7]) ); //18
console.log();

console.log(sum67([2, 7, 6, 2, 6, 2, 7]) ); //9
console.log(sum67([1, 6, 7, 7])); //8
console.log(sum67([6, 7, 1, 6, 7, 7])); //8
console.log();

console.log(sum67([6, 8, 1, 6, 7]));//0
console.log(sum67([])); //0
console.log(sum67([6, 7, 11]));//11
console.log();

console.log(sum67([11, 6, 7, 11]) ); //22
console.log(sum67([2, 2, 6, 7, 7]));//11*/
//temp = nums.slice(i, nums.indexOf(7)+1) ;
      //console.log(temp);
      //nums.splice(i, nums.indexOf(7)+1) ;
      //nums.splice(i,temp);  
      //console.log(nums);
