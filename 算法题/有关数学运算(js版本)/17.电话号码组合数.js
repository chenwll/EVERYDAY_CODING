// 刷题记录
// 2023/1/31

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    if(!digits) return []
    const n = digits.length;
    let res = [], stk = [];
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const tmp = [];
    // digits字符转成数字
    for (let i = 0; i < n; i++) {
        tmp[i] = +digits[i];
    }
    const dfs = (u) => {
        if(u === n){
            res.push(stk.join(''));
            return;
        }
        // 解决了如何递归的问题，重点是U的使用
        for(let i = 0; i < map[tmp[u]].length; i++) {
            // 不需要判断有没有使用过
            stk.push(map[tmp[u]][i]);
            dfs(u + 1);
            stk.pop();
        }
    }
    dfs(0)
    return res;
};
