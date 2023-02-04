// 刷题记录
// 2023/2/1 9.51

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
    let res = Infinity, sum = 0;
    for (let i = 0, j = 0; i < nums.length; i++) {
        sum += nums[i];
        // 注意这里是while循环来收短滑动窗口 2/1
        while (sum >= target) {
            res = res > i - j + 1 ? i - j + 1 : res;
            sum -= nums[j++];
        }
    }
    return res === Infinity ? 0 : res;
};
