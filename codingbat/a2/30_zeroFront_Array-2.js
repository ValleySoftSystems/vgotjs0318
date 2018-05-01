function zeroFront (nums) {
  
  var leftShiftArray = new Array(nums.length); 

  for (var i = 0; i < nums.length; i++) {
    //console.log("________");
    //console.log("i: "+i);
        
    if(nums[i] == 0 ) { 
        
        leftShiftArray[i-1] = nums[i]; 
          //console.log(leftShiftArray);
        
    }
    else
      {
        if(i == leftShiftArray.length -1) leftShiftArray[nums.length - 1] = nums[i];
         leftShiftArray[nums.length-2] = leftShiftArray[nums.length -1];
         leftShiftArray[nums.length-1]= nums[i];
        //i+1nums.length-1 if(i == nums.length -1) leftShiftArray[nums.length - 1] = nums[nums.length-1];
        //console.log(leftShiftArray);
      }
  }
  return leftShiftArray;
  
  /*var result = new Array(nums.length);
  
  for ( var  i = 0; i < nums.length; i++) {
    
    console.log("i: "+i);
    console.log("________");
   
    if(nums[i] == 0 ) { 
      
      result[i - 1] = nums[i];
      result[i] = nums[i+1];
      
      console.log("res[i-1]: "+result[i-1]+" res[i]: "+result[i]) ;
      console.log("result is: "+ result);
    } 
    else {
      
      result[result.length-1] = nums[i];
      result[i] = nums[i+1];
      console.log("res[i]: "+result[i]+" res[last]: "+ result[result.length-1]) ;
      console.log(result);
    }
      
       
  }  
  return result;*/
  
}


console.log(zeroFront([1, 0, 0, 1]) ); // [0, 0, 1, 1]
console.log(zeroFront([0, 1, 1, 0, 1]) ); // [0, 0, 1, 1, 1]
/*console.log(zeroFront([1, 0]) ); // [0, 1]
console.log();
  
console.log(zeroFront([0, 1]) ); // [0, 1]
console.log(zeroFront([1, 1, 1, 0]) ); // [0, 1, 1, 1]
console.log(zeroFront([2, 2, 2, 2]) ); // [2, 2, 2, 2]
console.log();
  
console.log(zeroFront([0, 0, 1, 0]) ); // [0, 0, 0, 1]
console.log(zeroFront([-1, 0, 0, -1, 0]) ); // [0, 0, 0, -1, -1]
console.log(zeroFront([0, -3, 0, -3]) ); // [0, 0, -3, -3]
console.log();
console.log(zeroFront([]) ); // []*/
