const myFlat = function (arr ,depth = 1) {
    if(depth === 0) return arr.slice()
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? myFlat(cur, depth - 1) : cur)
    },[])
}

// 不指定层级版本
const flat = (arr) => {
    return arr.reduce((acc,cur) => {
        return acc.concat(Array.isArray(cur) ? flat(cur) : cur);
    },[])
}

// [1, 2, 3, 4, [5, 6]]
let x = myFlat([1, 2, 3, [4, [5, 6]]])
console.log(x)

// [1, 2, 3, 4, 5, 6]
let y = flat([1, 2, 3, [4, [5, 6]]])
console.log(y)





