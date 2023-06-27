const myFlat = function (arr ,depth = 1) {
    if(depth === 0) return arr.slice()
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? myFlat(cur, depth - 1) : cur)
    },[])
}

// 不指定层级版本
// const flat = (arr) => {
//     return arr.reduce((acc,cur) => {
//         return acc.concat(Array.isArray(cur) ? flat(cur) : cur);
//     },[])
// }

// [1, 2, 3, 4, [5, 6]]
// let x = myFlat([1, 2, 3, [4, [5, 6]]])
// console.log(x)

// [1, 2, 3, 4, 5, 6]
// let y = flat([1, 2, 3, [4, [5, 6]]])
// console.log(y)


const flag = (arr,depth) => {
    if(depth < 0) return arr;
    const res = [];
    function flat(arr,depth) {
        for(let item of arr) {
            if(Array.isArray(item)&&depth > 0) {
                flat(item,depth - 1);
            }else{
                res.push(item);
            }
        }
    }
    flat(arr,depth)
    return res;
}


const x = flag([1, 2, 3, [4, [5, 6]]],20)
console.log(x);


