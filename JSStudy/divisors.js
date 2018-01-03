function divisors(integer) {
    var sqrt_n = Math.sqrt(integer);
    console.log(sqrt_n);
    var r;
    var arr = [];
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
    console.log(arr);
    /**
     * if (arr.length > 1) {
     *     return arr
     * } else {
     *     return integer.toString() + " is prime";
     * }
     */
    return arr.length ? arr : integer + " is prime";
};

/**
 * 对Number类型升序排序，可以这样写：
 * var arr = [0, 1, 5, 10, 15];
 * arr.sort(function(x, y) {
 *      return x - y;
 * });
 * 
 * 降序则：
 * var arr = [0, 1, 5, 10, 15];
 * arr.sort(function(x, y) {
 *      return y - x;
 * });
 */