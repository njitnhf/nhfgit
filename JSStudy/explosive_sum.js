function sum(num) {
    if (num < 0) return 0;
    var result = dynamic_GetPartitionCount(num, num);
    return result;
}
/*
function GetPartitionCount(n, max) {
    if (n == 1 || max == 1) {
        return 1;
    }
    if (n < max) {
        return GetPartitionCount(n, n);
    }
    if (n == max) {
        return 1 + GetPartitionCount(n, n - 1);
    }
    else {
        return GetPartitionCount(n - max, max) + GetPartitionCount(n, max - 1);
    }
}
*/
var ww;
var arr = new Array();             //声明一维数组        
for (var x = 0; x < 1000; x++) {
    arr[x] = new Array();        //声明二维数组
    for (var y = 0; y < 1000; y++) {
        arr[x][y] = 0;          //数组初始化为0
    }
}
var dynamic_GetPartitionCount = function (n, max) {
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            if (j == 1 || i == 1) {
                arr[i][j] = 1;
            }
            else {
                if (j == i) {
                    arr[i][j] = arr[i][j - 1] + 1;
                }
                else if ((i - j) < j) {
                    arr[i][j] = arr[i - j][i - j] + arr[i][j - 1];
                }
                else {
                    arr[i][j] = arr[i - j][j] + arr[i][j - 1];
                }
            }
        }
    }
    return arr[n][max];
}



//别人的解法
var memo = [];

function sum(n, m = n) {
    if (n == 0) return 1;
    if (n < 0 || m == 0) return 0;
    if (memo[n] && memo[n][m]) return memo[n][m];
    let total = sum(n, m - 1) + sum(n - m, m);
    if (!memo[n]) {
        memo[n] = [];
    }
    memo[n][m] = total;
    return total;
}