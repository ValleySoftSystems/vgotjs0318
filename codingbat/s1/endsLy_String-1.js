/* 

  Problem:
  
    Given a string, return true if it ends in "ly".


  Notes:
    
    extract substring last 2 chars and comapre with "ly"
    

*/

function endsLy (str) {
 
 var l = str.length;
 if(str.substring(l - 2, l) == "ly") {
    return true;
 }
 return false; 
}

console.log(endsLy("oddly")); 
console.log(endsLy("y")); 
console.log(endsLy ("oddy")); 

console.log(endsLy ("oddl")); 
console.log(endsLy ("olydd")); 
console.log(endsLy ("ly")); 

console.log(endsLy("")); 
console.log(endsLy("falsey")); 
console.log(endsLy ("evenly"));

