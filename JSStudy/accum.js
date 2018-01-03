function accum(s) {
    var list = new Array();
    list = s.toLowerCase().split("");
    var i;
    var str = new Array();
    for (i = 0; i < list.length; i++) {
        for (var j = 0; j <= i; j++) {
            j === 0 ? str += list[i].toUpperCase() : str += list[i].toLowerCase();
        }
        str += '-';
    }
    str = str.substr(0, str.length - 1);
    console.log(str);
    return str;
}

function accum_2(s){
    var temp = new Array();
    temp = s.split('');
    temp.map(function(x, index){
        return x.toUpperCase + Array(index-1).join(x.toLowerCase);
    });
    return temp.join('-');
}



function accum_bak(s) {
  return s.split('')
    .map((x,index) 
            => x.toUpperCase() 
            + Array(index+1).join(x.toLowerCase())
        )
    .join('-');
}
