snail = function (array) {

    console.log("array is:" + array);
    if (array[0].length == 0) {
        return [];
    }
    // enjoy

    var n = array.length;
    console.log("n is:" + n);
    var temp_x_r = n;
    var temp_y_r = n;
    var temp_x_l = 0;
    var temp_y_l = 0;
    var str = [];
    var num = 1;
    var x = 0,
        y = 0;
    str.push(array[0][0]);
    while (num < n * n) {
        while (y + 1 < temp_y_r) {
            console.log("y is:" + y);
            y++;
            str.push(array[x][y]);
            num++;
        }
        temp_y_r--;
        while (x + 1 < temp_x_r) {
            console.log("x is:" + x);
            x++;
            str.push(array[x][y]);
            num++;
            //console.log("number is:" + array[x][y]); 
        }
        temp_x_r--;
        while (y - 1 >= temp_y_l) {

            y--;
            str.push(array[x][y]);

            num++;
        }
        temp_y_l++;
        while (x - 1 > temp_x_l) {
            x--;
            str.push(array[x][y]);
            console.log("number is:" + array[x][y]);
            num++;
        }
        temp_x_l++;

    }
    console.log(str);
    return str;
}







snail = function (array) {
    var result;
    while (array.length) {
        // Steal the first row.
        result = (result ? result.concat(array.shift()) : array.shift());
        // Steal the right items.
        for (var i = 0; i < array.length; i++)
            result.push(array[i].pop());
        // Steal the bottom row.
        result = result.concat((array.pop() || []).reverse());
        // Steal the left items.
        for (var i = array.length - 1; i >= 0; i--)
            result.push(array[i].shift());
    }
    return result;
}