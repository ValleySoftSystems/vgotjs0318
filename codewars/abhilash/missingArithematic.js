var numList = [2, 4, 6, 8, 12];
var findMissing = function (list) {
    var diff = (list[list.length - 1] - list[0]) / list.length;
    console.log(alpha);
    for (var i = 0; i < list.length - 1; i++) {
        if (list[i + 1] - list[i] !== diff) {
            return list[i] + diff;
        }
    }
}
