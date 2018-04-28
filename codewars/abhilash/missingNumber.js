MISSING NUMBER IN ARRAY:
    function findMissingNumber(inputAr) {
        // Sort array
        sortArray(inputAr);

        // finding missing number here
        var result = 0;
        if (inputAr[0] > 1 || inputAr[inputAr.length - 1] < 1) {
            result = 1;
        } else {
            for (var i = 0; i < inputAr.length; i++) {
                if ((inputAr[i + 1] - inputAr[i]) > 1) {
                    result = inputAr[i] + 1;
                }
            }
        }
        if (!result) {
            result = inputAr[inputAr.length - 1] + 1;
        }
        return result;
    }

function sortArray(inputAr) {
    var temp;
    for (var i = 0; i < inputAr.length; i++) {
        for (var j = i + 1; j < inputAr.length; j++) {
            if (inputAr[j] < inputAr[i]) {
                temp = inputAr[j];
                inputAr[j] = inputAr[i];
                inputAr[i] = temp;
            }
        }
    }
}
