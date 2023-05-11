// 要求：从数组A中找出比num大的最小数字，若不存在则返回第一个数字；

let A = [5, 11, 15, 20, 100];
let num = 200;

const solve = (arr ,num) => {
    arr.sort((a,b) => a -b);
    if(arr[arr.length - 1] < num) return arr[0];
    let l = 0, r = arr.length - 1;
    while(l < r) {
        let mid = l + r >> 1;
        if(arr[mid] > num) r = mid;
        else l = mid + 1;
    }
    return arr[l];
}

let x = solve(A,num)
console.log(x)
