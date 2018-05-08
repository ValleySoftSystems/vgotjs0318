/* 
Problem:
  Given a string, return a string where every appearance of the lowercase word "is" has been replaced with "is not". The word "is" should not be immediately preceeded or followed by a letter -- so for example the "is" in "this" does not count. (Note: Character.isLetter(char) tests if a char is a letter.)
  
*/
function notReplace (str) {
   
  var result = "", newstr;
  
   for(var i = 0; i < str.length;){
     
     //console.log(`i: ${i}`);
     
     if(str.substring(i, i + 2) == "is" ) {
       
          if(isDigit(str, i)) 
          {
         
            result+= "is not";
            i = i+2;
            //console.log(`result when is found with limits: ${result}`);
         
          } 
          else
          {
            result+= "is";
            i = i+2;
            //console.log(`result when is found without limits: ${result}`);
          }
       } 
       else 
       {
            result+=str.substring(i, i + 1);
            i = i+1;
            //console.log(`result when is not found: ${result}`);
       }
      
   }
   return result;
}
//check the selected character is alphabet or not
function isDigit(str, i) {
  if(
      (!(str.charCodeAt(i - 1) >= 97 && str.charCodeAt(i - 1) <= 122) &&
       !(str.charCodeAt(i + 2) >= 97 && str.charCodeAt(i + 2) <= 122) 
      ) &&
      (!(str.charCodeAt(i - 1) >= 65 && str.charCodeAt(i - 1) <= 90) &&
       !(str.charCodeAt(i + 2) >= 65 && str.charCodeAt(i + 2) <= 90) 
      )
    )
  return true;
}

console.log(notReplace("is test") ); // "is not test"
console.log(notReplace("is-is") ); // "is not-is not"
console.log(notReplace("This is right") ); // "This is not right"
console.log();

console.log(notReplace("This is isabell") ); // "This is not isabell"
console.log(notReplace("") ); // ""
console.log(notReplace("is") ); // "is not"
console.log();

console.log(notReplace("isis") ); // "isis"
console.log(notReplace("Dis is bliss is") ); // "Dis is not bliss is not"
console.log(notReplace("is his") ); // "is not his"
console.log();

console.log(notReplace("xis yis") ); // "xis yis"
console.log(notReplace("AAAis is") ); // "AAAis is not"


