function alphabetPosition(text) {
    var strArr = text.toUpperCase();
    var numArr = [];
    for (var i in strArr) {
        var charCode = strArr.charCodeAt(i);
        if (65 <= charCode && charCode <= 90) {
            numArr.push(charCode - 64);
        }
    }
    /**
     * 先写numArr.join(" ")再return numArr回返回一个数组
     * 直接在return的地方进行join操作则返回的是字符串
     */
    return numArr.join(" ");
}


function alphabet_position_better(string) {
    return string
        .split("") // 分割成字元
        .filter(f => f.toLowerCase() != f.toUpperCase()) // 判定是否為英文字母
        .map(m => m.toLowerCase().charCodeAt(0) - 96) // 轉換成小寫取得 ascii 並減去 96
        .join(" ") // 再把這些分割的字元組合在一起並且用空格分隔
}

function alphabetPosition_3(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
  }