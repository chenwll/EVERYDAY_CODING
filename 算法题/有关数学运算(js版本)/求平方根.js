// 求平方根可以使用二分进行优化

// 小数部分会进行丢弃 8^0.5 = 2.8…… => 2

// function power(num) {
//     let l = 0, r = num;
//     while(l < r){
//         // 右移运算会自动向下取整
//         let mid = l + r + 1 >> 1;
//         if(mid*mid <= num) l = mid;
//         else r = mid - 1;
//     }
//     return l;
// }

function power(num) {
    let l = 0, r = num;
    while(l < r) {
        let mid = l + r >> 1;
        if(mid*mid > num) r = mid;
        else l = mid + 1;
    }
    return l
}

// 小数部分会进位 8^0.5 = 2.8…… => 3

// function mySqrt(num) {
//     let l = 1, r = num;
//     while(l < r) {
//         let mid = l + r >> 1;
//         if(mid*mid >= num) r = mid;
//         else l = mid + 1;
//     }
//     return l;
// }
//
let res = power(8);
// console.log(res)



// 限定精度版本
function abs(num) {
    if(num < 0) return -num;
    return num;
}

function mySqrt(num ,n) {
    let l = 0, r = num;
    while(l < r) {
        let mid = (l + r) / 2;
        // if(abs(mid*mid - num) < n) return r;
        if(mid*mid >= num) r = mid;
        else l = mid + n;
    }
    return l
}
let r = mySqrt(8,0.01);
console.log(r)





