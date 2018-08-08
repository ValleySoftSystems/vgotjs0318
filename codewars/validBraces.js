//Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return true if the string is valid, and false if it's invalid.
//All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

//a very smart solution

/*function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];
    console.log(currentChar);
    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
      console.log(stack);
    } else { // closing braces
        console.log("in" + currentChar);
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}*/



//Other Solution

/*function validBraces(braces){
    var pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    var stack = [];

    for (var i = 0; i < braces.length; ++i)
        if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{')
            stack.push(braces[i]);
        else if (stack[stack.length-1] === pairs[braces[i]])
            stack.pop();
        else
            return false; // catchall

    return stack.length === 0;

}*/


function validBraces(str) {
    var arr = [];
    for(var i=0; i<str.length; i++){
        if(str[i] === '{') arr.push('}');
        if(str[i] === '[') arr.push(']');
        if(str[i] === '(') arr.push(')');

        if(str[i]==='}'||str[i]===']'||str[i]===')'){
            if(str[i] === arr.pop()){
                if(arr.length === 0) return true;
            }else return false;
        }
    }
}

console.log(validBraces( "([])" ));



