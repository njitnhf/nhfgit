
function listSquared(m, n) {
    // your code
    var divisor_arr = [],
        temp_square = 0,
        re_num = 0,
        re_square = 0,
        result = [];
    for (; m < n; m++) {
        divisor_arr = divisors(m);
        //console.log(m + " 的因数有: " + divisor_arr);
        temp_square = sumofsquare(divisor_arr);
        //console.log("因数的平方和为: " + temp_square);
        if (Math.sqrt(temp_square) % 1 == 0) {
            result.push([m, temp_square]);
        }
    }
    return result;
}

//求一个数的所有因数（包含'1'和它本身）
function divisors(integer) {
    var sqrt_n = Math.sqrt(integer);
    var r;
    var arr = [];
    arr.push(1);
    if (integer != 1) {
        arr.push(integer);
    }
    for (var i = 2; i <= sqrt_n; i++) {
        if (integer % i == 0) {
            arr.push(i);
            r = integer / i;
            if (i != sqrt_n) {
                arr.push(r);
            }
        }
    }
    arr.sort(function (x, y) {
        return x - y;
    });
    return arr;
}

//求所有数字的平方和
function sumofsquare(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 2);
    }
    return sum;
}



/**
 * 以下是人家更好的写法
 */


function listSquared(m, n) {
    var matches = [];

    for (var i = m; i <= n; ++i) {
        var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
        var ok = Number.isInteger(Math.sqrt(sum));

        if (ok) {
            matches.push([i, sum]);
        }
    }

    return matches;
}

function getDivisors(n) {
    var divisors = [];

    for (var i = 1; i <= n / 2; ++i) {
        if (n % i) {
            continue;
        }

        divisors.push(i);
    }

    return divisors.concat([n]);
}

/**
 * 看上去更短的做法
 */

function listSquared(m, n) {
    var arr = [];
    for (var i = m; i <= n; i++) {
        var temp = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j == 0) temp += j * j;
        };
        if (Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
    };
    return arr;
}