// 初始化
// dp[i][j]的数组含义, i表示物品, j表示重量
for(let j = weight[0]; j <= size; j++) {
    dp[0][j] = value[0];
}

// weight 数组的长度len 就是物品个数
for(let i = 1; i < len; i++) { // 遍历物品
    for(let j = 0; j <= size; j++) { // 遍历背包容量
        if(j < weight[i]) dp[i][j] = dp[i - 1][j];
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
    }
}


for(let i = 1; i < len; i++) {
    for(let j = 0; j < size; j++) {
        if(j < weight[i]) {
            dp[i][j] = dp[i - 1][j];
        }
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
    }
}

dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);

for(let i = 1; i <= size; j++) {
    for(let j = size; j >= weight[i]; j--){

    }
}


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((pre,cur) => pre + cur);
    const len = nums.length;
    if(sum&1) return false;
    const target = sum / 2;
    for(let i = 0; i < len; i++) {
        for(let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
    }
    return dp[target] === target;
};