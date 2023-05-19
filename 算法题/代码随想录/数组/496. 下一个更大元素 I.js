/**
 * 下一个更大元素
 * 1. 先找到在数组中对应的元素
 * 2. 继续遍历，找到下一个更大的元素
*/

// 模型单调栈
// 最常见的模型，给定一个序列，求每一个数左边或者右边离他最近的数在什么地方

// 暴力
// 直接两个循环搞定

// 要想清楚栈里面存的数据代表什么含义，通过暴力来看是否有单调性，进而使用单调栈来优化暴力的方法
// 先和每日温度那一题的求法一样，可以先从nums2开始求，然后再映射一下

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = Array(nums1.length).fill(-1);
    let stk = [];
    let map = new Map();
    for(let i = 0; i < nums2.length; i++) {
        if(!stk.length||stk[stk.length - 1] >= nums2[i]) {
            stk.push(nums2[i]);
        }else {
            while(stk.length&&stk[stk.length - 1] < nums2[i]) {
                let pop = stk.pop();
                map.set(pop, nums2[i]);
            }
            stk.push(nums2[i])
        }
    }
    for(let i = 0; i < nums1.length; i++) {
        res[i] = map.get(nums1[i]) || -1;
    }
    return res;

};