// 难点
// 1. 怎么表示在哪一天买入股票和卖出股票
// 2. 怎么求最大值

// 解答
// 可以枚举卖出是那一天,扫描一遍和卖出那一天差最大的值
// 我们不需要知道买入和卖出的是哪一天，我们只要求差值就可以了

// 暴力写法
var maxProfit = function(prices) {
    let res = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = 0; j < i; j++) {
            res = Math.max(res, prices[i] - prices[j]);
        }
    }
    return res;
};

// 优化
// 记录前几天的一个最小值，边遍历边枚举
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    let min = prices[0];
    for(let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        res = Math.max(prices[i] - min, res);
    }
    return res;
};

