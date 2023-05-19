/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    // 循环代表要多遍历一次数组，怎么模拟多遍历一次的过程
    let n = nums.length;
    let res = Array(n).fill(-1);
    let stk = [];
    for(let i = 0; i < n*2; i++) {
        if(!stk.length || nums[stk[stk.length - 1]] >= nums[i % n]) {
            stk.push(i % n);
        }else {
            while(stk.length&& nums[stk[stk.length - 1]] < nums[i % n]) {
                let pop = stk.pop();
                res[pop] = nums[i % n];
            }
            stk.push(i % n);
        }
    }
    return res;
};