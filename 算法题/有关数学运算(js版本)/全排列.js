// 刷题记录
// 2023/1/30 22.36

//输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    const n = nums.length;
    let stk = [], res = [];
    let st = Array.from({length: nums.length}, () => 0);
    const dfs = (u) => {
        if (u === n) {
            res.push([...stk]);
        }
        for (let i = 0; i < n; i++) {
            if (!st[i]) {
                stk.push(nums[i]);
                st[i] = 1;
                dfs(u + 1);
                stk.pop();
                st[i] = 0;
            }
        }
    }
    dfs(0);
    return res;
};
