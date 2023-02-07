// 有人相爱，有人夜里开车看海，有人leetcode第一题都做不出来

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else map.set(nums[i], i);
    }
    return [];
};
