function towerBuilder(nFloors) {
    // build here
    var answer = [];
    for (var i = 0; i < nFloors; i++) {
        answer.push(kongge(nFloors - i - 1) + xinghao(2 * (i + 1) - 1) + kongge(nFloors - i - 1));
    }
    return answer;
}

function kongge(num) {
    var answer = "";
    for (var i = 0; i < num; i++) {
        answer += " ";
    }
    return answer;
}

function xinghao(num) {
    var answer = "";
    for (var i = 0; i < num; i++) {
        answer += "*";
    }
    return answer;
}




function towerBuilder_1(n) {
    return Array.from({ length: n }, function (v, k) {
        const spaces = ' '.repeat(n - k - 1);
        return spaces + '*'.repeat(k + k + 1) + spaces;
    });
}