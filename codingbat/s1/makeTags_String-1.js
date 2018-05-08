/* 

  Problem:
  
    The web is built with HTML strings like "<i>Yay</i>" which draws 
    Yay as italic text. In this example, the "i" tag makes <i> and </i>
    which surround the word "Yay". Given tag and word strings, create 
    the HTML string with tags around the word, e.g. "<i>Yay</i>".

  Notes:
    
    use concatenation with opening and closing angle brackets , tag and word 
    

*/

function makeTags (tag, word) {
  
  return "<" + tag + ">" + word + "</" + tag + ">";
}

console.log(makeTags("i", "Yay"));
console.log(makeTags("i", "Hello"));
console.log(makeTags("cite", "Yay"));

console.log(makeTags("address", "here"));
console.log(makeTags("body", "Heart"));
console.log(makeTags("i", "i"));

console.log(makeTags("i", ""));
