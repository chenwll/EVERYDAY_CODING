// 刷题记录
// 2023/1/30 10.08

// 双指针，当nums[i] !== val时， 直接赋值给nums[k]即可
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k++] = nums[i];
        }
    }
    return k;
};
