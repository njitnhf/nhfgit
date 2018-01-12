var recoverSecret = function (triplets) {
    var temp_str = triplets;
    var result = "";
    var fisrt_str = "";
    var result_num;
    result_num = count(temp_str);
    for (var i = 0; i < result_num; i++) {
        fisrt_str = first(temp_str);
        console.log(fisrt_str);
        result += fisrt_str;
        //因为去掉的肯定是第一个，所以只要目标数组删除第一个元素就可以了
        temp_str.filter(([item]) => item == fisrt_str).forEach(tuple => tuple.shift());
        //  for (var j = 0; j < temp_str.length; j++) {
        //     remove(temp_str[j], fisrt_str);
        //  }
    }
    console.log(result);
    return result;
}

//当前数组中逻辑上的的第一个字母
var first = function (arr) {
    var first;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j][0] != undefined) {
            first = arr[j][0];
            break;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(first) == 0 || arr[i].indexOf(first) == -1) {
            continue;
        } else {
            first = arr[i][0];
            i = 0;
        }
    }
    return first;
}

//计算不重复字母总和
var count = function (arr) {
    var str = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (str.indexOf(arr[i][j]) == -1) {
                str.push(arr[i][j]);
            }
        }
    }
    return str.length;
}

//删除数组中对应元素
function remove(arr, str) {
    var index;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == str) {
            arr.splice(i, 1);
        }
    }
    return arr;
}


triplets1 = [
    ['t', 's', 'f'],
    ['a', 's', 'u'],
    ['m', 'a', 'f'],
    ['a', 'i', 'n'],
    ['s', 'u', 'n'],
    ['m', 'f', 'u'],
    ['a', 't', 'h'],
    ['t', 'h', 'i'],
    ['h', 'i', 'f'],
    ['m', 'h', 'f'],
    ['a', 'u', 'n'],
    ['m', 'a', 't'],
    ['f', 'u', 'n'],
    ['h', 's', 'n'],
    ['a', 'i', 's'],
    ['m', 's', 'n'],
    ['m', 's', 'u']
]

recoverSecret(triplets1);


/**
 * 别人的解法
 */

var recoverSecret = function (triplets) {
    for (var [first] of triplets) {
        if (triplets.every(tuple => tuple.indexOf(first) <= 0)) {
            triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
            return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
        }
    }
    return '';
}

var recoverSecret = function (triplets) {
    for (var first of triplets) {
        if (triplets.every(
            function (tuple) {
                return tuple.indexOf(first) <= 0;
            }
        )) {
            triplets.filter(
                function (item) {
                    return item == first;
                }
            ).forEach(
                function (tuple) {
                    return tuple.shift();
                }
                )
            return first + recoverSecret(triplets.filter(function (tuple) {
                return tuple.length > 0;
            }))
        }
    }
    return '';
}