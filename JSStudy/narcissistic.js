function narcissistic(value) {
    // Code me
    var arr = [];
    arr = value.toString().split("");
    var sum = 0;
    for (var i in arr) {
        sum += dec(arr[i], arr.length);
    }
    return sum == value ? true : false;
}

function dec(num, length) {
    var sm = 1;
    for (var i = 0; i < length; i++) {
        sm *= num;
    }
    return sm
}

/**
 * A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.
 */

function narcissistic_1(value) {
    return ('' + value).split('').reduce(function (p, c) {
        return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}