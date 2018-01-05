/**
  When I find this solution on Github.
  I just want to fxxk my noob solution.
*/
function solution(number) {
    // convert the number to a roman numeral
    var numerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var roman = '',
        i;
    for (i in numerals) {
        while (number >= numerals[i]) {
            roman += i;
            number -= numerals[i];
        }
    }
    return roman;
}