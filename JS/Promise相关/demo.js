function myFlat(arr, depth) {
    if(depth === 0) return arr.slice();
    return arr.reduce((acc,cur) => {
        return acc.concat(Array.isArray(cur) ? myFlat(cur, depth - 1) : cur);
    },[])
}

let x = myFlat([1, 2, 3, [4, [5, 6]]],1)
console.log(x)
