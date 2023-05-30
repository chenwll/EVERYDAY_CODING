/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMin = [];
    let rightMin = [];
    let stk = [];

    // 求每个点左边的最小值
    for(let i = 0; i < height.length; i++) {
        while(stk.length&&height[i] < stk[stk.length - 1]) {
            stk.pop();
        } 
        if(stk.length) leftMin[i] = stk[stk.length - 1];
        else leftMin[i] = 0;
        stk.push(height[i]);
    }

    // 求右边的最小值
    stk = [];
    for(let i = height.length - 1; i >= 0; i--) {
        while(stk.length&&height[i] < stk[stk.length - 1]) {
            stk.pop();
        } 
        if(stk.length) rightMin[i] = stk[stk.length - 1];
        else rightMin[i] = 0;
        stk.push(height[i]);
    }

    let res = 0;
    for(let i = 0; i < height.length; i++) {
        let tmp  = Math.min(rightMin[i], leftMin[i]) - height[i]
       if(tmp > 0) res += Math.min(rightMin[i], leftMin[i]) - height[i];
    }
    console.log(res,leftMin,rightMin);
};

let res = [0,1,0,2,1,0,1,3,2,1,2,1];
trap(res)

// 接雨水不能这么求，他求得是两个凹槽之间的体积