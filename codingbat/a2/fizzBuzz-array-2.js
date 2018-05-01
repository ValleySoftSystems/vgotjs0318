function fizzBuzz(minRange, maxRange) {
      
        var arrLength = maxRange - minRange;
        var arr=[];
      
        for (let i=0; i<arrLength; i++) {
          arr[i] = minRange;
          if ((arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
              arr[i] = "FizzBuzz";  
          } else if (arr[i] % 3 === 0) {
              arr[i] = "Fizz"; 
          } else if (arr[i] % 5 === 0){
              arr[i] = "Buzz";
          } 
          minRange++;
        }
        return arr;
}
    
console.log(fizzBuzz(1, 6)); // → ["1", "2", "Fizz", "4", "Buzz"]
console.log(fizzBuzz(1, 8)); // → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
console.log(fizzBuzz(1, 11)); // → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]