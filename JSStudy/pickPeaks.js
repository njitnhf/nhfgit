function pickPeaks(arr) {
    console.log(arr);
    var pos = [];
    var peaks = [];
    var peak_now = 0;
    var peak_left = 0;
    var peak_right = 0;
    var peak_temp = 0;
    var repeat_num = 0;
    for (var i = 1; i < arr.length - 1; i++) {
        peak_now = arr[i];
        if (left(arr.slice(0, i), peak_now)
            && right(arr.slice(i + 1, arr.length), peak_now)) {
            if (arr[i] != arr[i - 1]) {
                console.log("ADD ONE");
                pos.push(i);
                peaks.push(arr[i]);
            }
        }
        console.log(" ");
    }
    //  return {pos:[],peaks:[]}
    return { pos, peaks };
}

function left(arr, now) {
    console.log("left: " + arr);
    console.log("peak_now: " + now);
    var flag = true;
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] > now) {
            flag = false;
            break;
        } else {
            if (arr[i] == now) {
                continue;
            } else {
                break;
            }
        }
    }
    console.log("left flag: " + flag);
    return flag;
}

function right(arr, now) {
    console.log("right: " + arr);
    console.log("peak_now: " + now);
    var flag = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > now) {
            flag = false;
            break;
        } else {
            if (isAllEqual(arr)) {
                flag = false;
                break;
            }

            if (arr[i] == now) {
                continue;
            } else {
                break;
            }
        }
    }
    console.log("right flag: " + flag);
    return flag;
}

function isAllEqual(array) {
    if (array.length > 0) {
        return !array.some(function (value, index) {
            return value !== array[0];
        });
    } else {
        return true;
    }
}


/**
 * In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

Have fun!
 */



function pickPeaks(arr) {
    var result = { pos: [], peaks: [] };
    if (arr.length > 2) {
        var pos = -1;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                pos = i;
            } else if (arr[i] < arr[i - 1] && pos != -1) {
                result.pos.push(pos);
                result.peaks.push(arr[pos]);
                pos = -1;
            }
        }
    }
    return result;
}


function pickPeaks(arr) {
    var pos = arr.map((x, i) => i > 0 ? Math.sign(x - arr[i - 1]) * i : 0)
        .filter(i => i != 0)
        .filter((x, i, a) => i < a.length - 1 && (a[i + 1] < 0 && x > 0));
    return { pos: pos, peaks: pos.map(i => arr[i]) }
}