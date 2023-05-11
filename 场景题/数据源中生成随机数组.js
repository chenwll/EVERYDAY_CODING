// 怎么在制定数据源里面生成一个长度为 n 的不重复随机数组 能有几种方法 时间复杂度多少（字节）

// 时间复杂度 O(n), 交换两个数组值，当这个数据被使用之后，就放到最末尾

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function getRandom(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

// function getNum(arr ,n) {
//     let ans = [];
//     for(let i = 0; i < n; i++) {
//         let index = getRandom(0,arr.length - i - 1);
//         ans.push(arr[index]);
//         arr[index] = arr[arr.length - i - 1]
//     }
//     return ans;
// }


console.log(getNum(testArray,14))
