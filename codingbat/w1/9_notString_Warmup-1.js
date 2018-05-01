/*Given a string, return a new string where "not " has been added to 
the front. However, if the string already begins with "not", 
  return the string unchanged. Note: use .equals() to compare 2 strings.
  */
  function notString (str){
    if(str.substr(0,3)==="not")
      return str;
    else
      return "not " + str;
    
  }
console.log(notString("candy"));
console.log(notString("y"));
console.log(notString("not candy"));
