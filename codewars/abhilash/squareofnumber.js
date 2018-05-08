//For example,
//if we run 9119 through the
//
//function, 811181 will come out, because 92 is 81 and 12 is 1.

Ans:
    function squareDigits(num) {
        //may the code be with you
        var strNum = String(num);
        var result = '';
        for (var i = 0; i < strNum.length; i++) {
            result = result + strNum[i] * strNum[i];
        }
        return Number(result);
    }
