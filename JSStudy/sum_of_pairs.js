var sum_pairs = function (ints, s) {
    //your code here
    var result = [];
    var start = 0,
        end = 0,
        temp = 0;
    for (var i = 0; i < ints.length - 1; i++) {
        for (var j = i + 1; j < ints.length; j++) {
            if (temp == 0 && ints[i] + ints[j] == s) {
                start = ints[i];
                end = ints[j];
                temp = j;
                console.log("First match: " + [start, end]);
            }
            if (ints[i] + ints[j] == s && j < temp) {
                start = ints[i];
                end = ints[j];
                temp = j;
                console.log("Better match:" + [start, end]);
            }

        }
    }
    result.push([start, end]);
    console.log(result);
    return temp == 0 ? undefined : result;
}





var sum_pairs = function (ints, s) {
    //your code here
    var sums = {};
    for (var i = 0, length = ints.length; i < length; i++) {
        if (sums[s - ints[i]] !== undefined) {
            return [s - ints[i], ints[i]];
        }
        sums[ints[i]] = true;
    }
    return undefined;
}