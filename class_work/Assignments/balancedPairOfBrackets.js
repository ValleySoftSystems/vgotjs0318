// Only considering pairs: block{}, square brackets[] and parenthesis()

{ // Avoiding global namespace conflict with this code block
    let mapPairs = new Map();
    mapPairs.set('{', '}')
            .set('[', ']')
            .set('(', ')');
            
    function checkIfStringIsBalanced(str) {
        if (typeof(str) === "string") {
          var brackets_array = str.match(/[\[\]\{\}\(\)]/gi);
          
        if (Array.isArray(brackets_array)) {
          var len = brackets_array.length;
          
          if (brackets_array.length % 2)
            return false;

          for (let i=0;i<len/2;i++) {
            if (mapPairs.has(brackets_array[i]))
              if (!(brackets_array[(len-1)-i] === mapPairs.get(brackets_array[i])))
                  return false;
           }
          return true;
        } else
            return `Not a valid arg "${str}"`;
      }
    }

    console.log(checkIfStringIsBalanced("{[()]}"));
    console.log(checkIfStringIsBalanced("{[(])}"));
    console.log(checkIfStringIsBalanced("{[([])]}"));
    console.log(checkIfStringIsBalanced('{x:5,y:"hello world"}'));
    console.log(checkIfStringIsBalanced('{x:5,y:"hello ( world"}'));
    console.log(checkIfStringIsBalanced("{x:5, y:[22, 23]}"));
    console.log(checkIfStringIsBalanced("{x:5, y:23]}"));
    console.log(checkIfStringIsBalanced("a"));
    console.log(checkIfStringIsBalanced([]));
    console.log(checkIfStringIsBalanced({}));
    console.log(checkIfStringIsBalanced(null));
}  