function bouncingBall(h, bounce, window) {
    // your code here
    let count = 0;
    let times = 0;
    let ball_height = 0;
    while (h * bounce > window) {
        h = h * bounce;
        count++;
    }
    times = 1 + count * 2;
    return times;
}

function bouncingBall_1(h, bounce, window) {
    var count = -1;
    if (bounce > 0 && bounce < 1) while (h > window) count += 2, h *= bounce;
    return count;
}


function bouncingBall(h,  bounce,  window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
  }