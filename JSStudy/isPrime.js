function isPrimeNum(num) {
    if (!isNum(num)) {
        return false;
    }
    if (!isInteger(num)) {
        return false;
    }
    num = Math.abs(num);
    if(num == 1){
        return false;
    }
    if (num == 2 || num == 3 || num == 5) {
        return true;
    }
    if (!isDual(num)) {
        return false;
    }
    if (!isThree(num)) {
        return false;
    }
    for (var i = 2; i < num / 5 + 1; i++) {
        if (num % i == 0) {
            return false;
        }
    };
    return true;
}
function isInteger(num) {
    return num == ~~num ? true : false;
}
function isNum(num) {
    return num == +num ? true : false;
}
function isDual(num) {
    var num = num.toString();
    var lastNum = num.substring(num.length - 1, num.length);
    return lastNum % 2 == 0 || lastNum % 5 == 0 ? false : true;
}
function isThree(num) {
    var str = num.toString();
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += +str.substring(i, i + 1);
    };
    return sum % 3 == 0 ? false : true;
}