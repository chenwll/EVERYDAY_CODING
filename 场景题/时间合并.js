
const arr = [['a', 9, 10], ['a', 10, 11], ['a', 11, 12], ['b', 12, 14], ['b', 15, 16], ['a', 17, 19]]
// =>
// [[A, 9, 12], [B, 12, 14], [B, 15, 16], [A, 17, 19]]

const timeMerge = (arr) => {
    let res = [];
    let tmp = arr[0];
    for(let i = 1; i < arr.length; i++){
        let item = arr[i]
        const [name,start,end] = item;
        if(name === tmp[0]&& start === tmp[2]) {
            tmp[2] = end;
        }else {
            res.push(tmp);
            tmp = item;
        }
    }
    return res;
}

let x = timeMerge(arr)
console.log(x)

