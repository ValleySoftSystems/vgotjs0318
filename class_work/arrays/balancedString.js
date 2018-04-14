/*Given a string input, return true/false to indicate whether it is balanced in terms of {} [] ()
Ignore parts of the string that are enclosed with pair of "" (double quotes) and pair or single quotes ('')
Also, if you encounter // --- then ignore that part of the string till a new-line char '\n' occurs*/

function balancedString(str) {
    var strArr = str.split("");
    var arrCompareStack = [];
    var flag = true;
    var count1 = 0;
    var count2 = 0;
    for (var i = 0; i < strArr.length; i++) {
        var ch = strArr[i];
        if (count1 == 2 || count2 == 2) flag = true;

        if (ch === '"' || ch === "'") {
            flag = false;
            count1++;
        }

        if (ch === "/") {
            flag = false;
            count2++;
        }

       /* if (count2 == 2 && ch === "\n") {
            flag = false;
            count2++;
            console.log("/n count2: " + count2);
        }*/
        if (flag) {
            switch (ch) {
                case "{":
                    arrCompareStack.push("}");

                    break;
                case "[":
                    arrCompareStack.push("]");
                    break;
                case "(":
                    arrCompareStack.push(")");
                    break;

            }
            if (ch === "}" || ch === "]" || ch === ")") {
                    if (ch === arrCompareStack.pop()) {
                    if (arrCompareStack.length == 0) {
                            return true;
                        }
                    }else return false;
            }

        }

    }
}


console.log(balancedString("{[()]}")); //true
console.log(balancedString("{[(])}")); //false
console.log(balancedString("{[([])]}"));  //true
console.log(balancedString("{x:5,y:\"hello world\"}"));  //true
console.log(balancedString("{x:5,y:\"hello ( world\"}")); //true
console.log(balancedString("{x:5,y:\"hello ( world\"} // (")); //true
console.log(balancedString("{x:5, y: [22, 23]}")); //true
console.log(balancedString("{x:5, y: 23]}")); //false