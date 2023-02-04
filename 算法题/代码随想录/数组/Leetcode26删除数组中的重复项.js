/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let k = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[k] !== nums[i]) {
            nums[++k] = nums[i];
        }
    }
    // 返回的时数组长度，所以要加1
    return k + 1;
};
