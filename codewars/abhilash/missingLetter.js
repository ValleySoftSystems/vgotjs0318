function findMissingLetter(array) {
    var arr = array.map(function (char) {
        return char.toLowerCase();
    });
    var alphabet = 'abcdefghijklmnopqrstuvwxyza';
    var arrNum = arr.map(function (char) {
        return alphabet.indexOf(char);
    });
    var missingNum = null;
    for (var i = 0; i < arrNum.length - 1; i++) {
        if (arrNum[i] !== arrNum[i + 1] - 1) {
            missingNum = arrNum[i] + 1;
        }
    }
    var missingAlpha = alphabet[missingNum];
    if (array[0] === array[0].toLowerCase()) {
        return missingAlpha;
    } else {
        return missingAlpha.toUpperCase();
    }
}
