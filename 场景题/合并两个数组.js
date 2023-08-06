// 【1,2,3】【4,5,6】合并成【【1，4】...】

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const merge = (arr1, arr2) => {
    if(arr1.length === 0) return [];
    return [
        [arr1.shift(), arr2.shift()],
        ...merge(arr1, arr2)
    ]
}
const res = merge(arr1, arr2)
console.log(res)

const a = ['apple','apple','banana','transparent','origin','transparent'];


