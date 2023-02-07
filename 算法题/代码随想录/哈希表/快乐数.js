/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    let set = new Set();
    let total;
    let s = n;
    while (total !== 1) {
        // parseInst是根据二进制来变成数字的，所以这里用Math.floor
        let arr = s.toString().split('').map(Math.floor);
        total = 0;
        arr.forEach((item) => {
            total += item * item;
        })
        if (set.has(total)) return false;
        else set.add(total);
        s = total;
    }
    return true;
};
