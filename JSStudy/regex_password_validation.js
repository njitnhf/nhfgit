function validate(password) {
    console.log(password);
    //错是因为多写了一个'.'会匹配除了换行符'\n'以外的任意一个字符。去掉下面的'.'就好了
    var result = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9].{6,}$/.test(password);
    console.log(result);
    return result;
}




function validate(password) {
    console.log(password);
    var result = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
    console.log(result);
    return result;
}


//most readability solution
function validate(password) {
    return /^[A-Za-z0-9]{6,}$/.test(password) &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password);
}


function validate(password) {
    return /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])).[A-Za-z0-9]{6,}$/.test(password);
}