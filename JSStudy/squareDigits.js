function squareDigits(num) {
    var list = num.toString().split("");
    //console.log(list);
    var str = "";
    for (var i in list) {
        str += (Number(list[i]) * Number(list[i])).toString();
        //console.log(Number(list[i]) * Number(list[i]));
        //console.log(str);
    }
    return str;
}



function squareDigits_1(num) {
    return Number(('' + num)
                    .split('')                  //通过拼接''直接变成了string，再分割
                    .map(function (val) {       //map返回每位的平方
                            return val * val;   
                        })
                    .join(''));                 //用''连起来
}


function squareDigits(num) {
    var array = num.toString().split('').map(function (int) {
        var i = parseInt(int);
        return i * i;
    });

    return parseInt(array.join(""));
}