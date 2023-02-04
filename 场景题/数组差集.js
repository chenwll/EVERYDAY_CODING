const arr1 = [2,4,5,6,7];
const arr2 = [1,8,3,4];

// filter返回true就保留，返回false丢弃

//基本数据类型
const res = arr1.filter((item) => !arr2.includes(item))
console.log(res)


// 引用数据类型
let arr3 = [
    {fpcid: "2da37fdfe66140089dc3367b21cc6194", fpcNameCode: "34"},
    {fpcid: "2da37fdfe66140089dc3367b21cc6195", fpcNameCode: "33"},
    {fpcid: "2da37fdfe66140089dc3367b21cc6196", fpcNameCode: "35"},
    {fpcid: "2da37fdfe66140089dc3367b21cc6197", fpcNameCode: "36"}
];
let arr4 = [
    {fpcid: "2da37fdfe66140089dc3367b21cc6194", fpcNameCode: "34"},
    {fpcid: "2da37fdfe66140089dc3367b21cc6195", fpcNameCode: "33"}
];

function getDifferentSet(arr1,arr2) {
    arr1 = arr1.map(JSON.stringify);
    arr2 = arr2.map(JSON.stringify);
    return arr1.filter((item) => !arr2.includes(item));
}

console.log(getDifferentSet(arr3,arr4))
