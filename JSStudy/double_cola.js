function whoIsNext(names, r) {
    //your code here
    var inner_arr = names;
    var first;
    for (var i = 0; i < r; i++) {
        first = inner_arr.shift();
        inner_arr.push(first, first);
        //  console.log(names);
    }
    return first;
}






function whoIsNext(names, r) {
    //your code here
    var str_length = names.length;
    var arr = [];
    for (let i = 0; i < 31; i++) {
        arr.push(Math.pow(2, i));
    }
    var l = 0;
    while (r - arr[l] * str_length > 0) {
        r -= arr[l] * str_length;
        l++;
    }
    return names[Math.ceil(r / arr[l]) - 1];

}


function whoIsNext(names, r) {
    var l = names.length;
    while (r >= l) { r -= l; l *= 2; }
    return names[Math.ceil(names.length * r / l) - 1];
}