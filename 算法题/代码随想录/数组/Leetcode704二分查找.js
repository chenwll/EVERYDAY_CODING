// 刷题记录
// 2023/1/30 9.55

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
    // 注意，l要从0开始
    let l = 0 , r = nums.length - 1;
    while(l < r) {
        let mid = l + r >> 1;
        if(nums[mid] >= target) r = mid;
        else l = mid + 1;
    }
    if(nums[l] !== target) return -1;
    return l;
};

// 相关题目：Leetcode367
