// set里面判断是使用严格相等的 但是NaN和NaN是相等的，所以会对NaN进行去重
// 使用IndexOf 也是严格相等，但是NaN是不等于NaN的， [1,2,NaN].indexOf(NaN) = -1

const arr = [1, 2, 2, 'abc', 'abc', true, true, false, false, undefined, undefined, NaN, NaN]

const removeSame = (arr) => {
    return arr.filter((item,index) => {
        return arr.indexOf(item) === index
    })
}

console.log([...new Set(arr)]);
console.log(Array.from(new Set(arr))) ;
console.log(removeSame(arr));
