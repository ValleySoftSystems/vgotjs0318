/*solution to http://codingbat.com/prob/p199720

Problem: 
  Given a string, return a string made of the first 2 chars (if present),
  however include first char only if it is 'o' and include the second 
  only if it is 'z', so "ozymandias" yields "oz".
  
Notes:
  create a empty string to be returned.

  find the length of string , 
  check whether it is more than  0 

  if yes check first two chars and append them to a empty string.
  keep first char in result if o and second char if it is z
  
  */

function startOz (str) {
  var resstr='';
  
  if(str.length > 0){
       if(str.charAt(0) == 'o') {
          resstr = resstr + 'o';
      }
    
      if(str.charAt(1) == 'z') {
          resstr = resstr + 'z';
      }
  }
  
  return resstr;
}


console.log( startOz("o") );
console.log( startOz("ozymandias") ); 
console.log( startOz("bzoo")  );
console.log( startOz("oxx") );

console.log( startOz("oz")  ); 
console.log( startOz("ounce") );
console.log( startOz("o") );


console.log( startOz("abc") );
console.log( startOz("") );
console.log( startOz("zoo") ); 

console.log( startOz("aztec") )
console.log( startOz("zzzz") );
console.log( startOz("oznic") );
