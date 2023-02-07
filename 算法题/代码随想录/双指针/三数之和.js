/**
 * 2023/2/7
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    let ans = [];
    // 记得要先排序，排序之后才能用双指针
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i && nums[i - 1] === nums[i]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] === 0) {
                ans.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[r - 1] === nums[r]) r--;
                while (l < r && nums[l + 1] === nums[l]) l++;
                // 再同时r--,l++
                r--;
                l++;
            } else if (nums[i] + nums[l] + nums[r] > 0) r--;
            else l++;
        }
    }
    return ans;
};
