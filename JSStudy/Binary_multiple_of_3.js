// Regular expression that matches binary inputs that are multiple of 3
var multipleOf3Regex = function () {
    return "OK";
};

multipleOf3Regex.test = function (str) {
    var temp = str;
    temp = str.split("");
    console.log(temp);
    if (str == 0) {
        var flg = true;
        for (var i = 0; i < temp.length; i++) {
            if (temp[i] != 0) {
                console.log(temp[i]);
                return false;
            }
        }
        return true;
    }
    console.log(str);
    return /^1((10*1)|(01*0))*10*$/.test(str);
};

