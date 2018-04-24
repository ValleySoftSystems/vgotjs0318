/* 
Problem:
  Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed 
  (not case sensitive). You may assume that the remove string is length 1 or more. 
  Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".
*/


function withoutString (base, remove) {
  
  var removeLower = remove.toLowerCase();
  var removeUpper = remove.toUpperCase();
  
  var newbase = base;
  
  for(var i = 0; i < newbase.length; i++) {
    
    //check for the original remove
    if( newbase.substring(i, i + remove.length ) == remove ) {
      
      newbase = newbase.replace(newbase.substring(i, i + remove.length ), "");
      i -= remove.length;
     
    }
    
  }
  
  for(var i = 0; i < newbase.length; i++) {
    
    //check for remove in lowercase
    if( newbase.substring(i, i + remove.length ) == removeLower ) {
      
      newbase = newbase.replace(newbase.substring(i, i + remove.length ), "");
      i -= remove.length;
      
    }
    
  }
 
  for(var i = 0; i < newbase.length; i++) {
      //check for remove in uppercase
      if( newbase.substring(i, i + remove.length ) == removeUpper ) {
      
        newbase = newbase.replace(newbase.substring(i, i + remove.length ), "");
        i -= remove.length;
        
      }
   
  }
  
  return newbase;
}




console.log(withoutString("Hello there", "llo") ); // "He there"
console.log(withoutString("Hello there", "e") ); // "Hllo thr"
console.log(withoutString("Hello there", "x") ); // "Hello there"
console.log();
 

console.log(withoutString("THIS is a FISH", "is") ); // "TH a FH"
console.log(withoutString("This is a FISH", "IS") ); // "Th a FH"
console.log(withoutString("THIS is a FISH", "iS") ); // "TH a FH"
console.log();

console.log(withoutString("abxxxxab", "xx") ); // "abab"
console.log(withoutString("abxxxab", "xx") ); // "abxab"
console.log(withoutString("abxxxab", "x") ); // "abab"
console.log();

console.log(withoutString("xxx", "x") ); // ""
console.log(withoutString("xxx", "xx") ); // "x"
console.log(withoutString("xyzzy", "Y") ); // "xzz"
console.log();

console.log(withoutString("", "x") ); // ""
console.log(withoutString("abcabc", "b") ); // "acac"
console.log(withoutString("AA22bb", "2") ); // "AAbb"
console.log();//


console.log(withoutString("1111", "1") );// ""      
console.log(withoutString("1111", "11") );// ""    
console.log(withoutString("MkjtMkx", "Mk") );// "jtx"     
console.log(withoutString("Hi HoHo", "Ho") );// "Hi "  