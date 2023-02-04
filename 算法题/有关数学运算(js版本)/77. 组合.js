// 刷题记录
// 2023/1/31

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    let ans = [], stk = [];
    const dfs = (u, start) => {
        if (u === k) {
            ans.push([...stk]);
            return;
        }
        for (let i = start; i <= n; i++) {
            stk.push(i);
            // dfs时是i + 1
            dfs(u + 1, i + 1);
            stk.pop();
        }
    }
    dfs(0, 1);
    return ans;
};
