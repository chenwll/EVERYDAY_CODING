// 刷题记录
// 2023/1/30 9.55

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
    let l = 1, r = num;
    while (l < r) {
        // 只会保留整数位 - 1/30
        let mid = l + r >> 1;
        if (mid * mid >= num) r = mid;
        else l = mid + 1;
    }
    return l * l === num;

};
