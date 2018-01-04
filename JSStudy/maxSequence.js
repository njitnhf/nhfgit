var maxSequence = function (arr) {
    // ...
    if (arr.length < 1) {
        return 0;
    }
    var start = 0;
    var end = 0;
    var temp = 0;
    var temp_max_sum = 0;
    console.log("arr length: " + arr.length);
    for (var i = 0; i < arr.length - 1; i++) {
        temp = arr[i];
        console.log("begin at: " + temp);
        for (var j = i + 1; j < arr.length; j++) {
            temp += arr[j];
            console.log("temp is: " + temp);
            if (temp > temp_max_sum) {
                temp_max_sum = temp;
                start = i;
                end = j;
                console.log("temp_max_sum is: " + temp_max_sum);
                console.log("start is: " + start);
                console.log("end is: " + end);
            }
        }
    }
    //return temp_max_sum + ":" + " " + arr.slice(start, end + 1);
    //return arr.slice(start, end + 1);
    return temp_max_sum;
}

var maxSequence_2 = function (arr) {
    var max_ending_here = 0, max_so_far = 0;

    for (var x in arr) {
        max_ending_here = Math.max(0, max_ending_here + arr[x]);
        max_so_far = Math.max(max_so_far, max_ending_here)
    }
    return max_so_far;
}


var maxSequence_1 = function (arr) {
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
        sum += arr[i];
        min = Math.min(sum, min);
        ans = Math.max(ans, sum - min);
        console.log("sum is: " + sum);
        console.log("min is: " + min);
        console.log("ans is: " + ans);
        console.log(" ");
    }
    return ans;
}