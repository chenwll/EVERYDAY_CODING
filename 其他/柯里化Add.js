// 文章 https://www.qiufeng.blue/interview/bytedance-add-sumOf.html#%E6%AD%A3%E6%96%87
// Add(1)(2)(3).sumOf(); // 输出 6
// Add(1,2)(3)(4).sumOf(); // 输出 10

// 第一步先实现一个参数 Add(1)(2)(3) // 6

// function Add(x) {
//     return function (y) {
//         return function (z) {
//             return x + y + z;
//         }
//     }
// }

// console.log(Add(1)(2)(3))

// 用arguments实现不确定参数
// Add(1,2,...)(3)(4)(...)


// function Add() {
//     const nums = [...arguments];
//     return function () {
//         nums.push(...arguments);
//         return function () {
//             nums.push(...arguments)
//             return nums.reduce((acc,cur) => {
//                 return acc + cur;
//             },0)
//         }
//     }
// }

// console.log(Add(1,2)(3)(4))

// 无限调用
// 但是不能确定什么时候调用求和

// function Add() {
//     const nums = [...arguments];
//     function AddPro() {
//         nums.push(...arguments);
//         return AddPro
//     }
//     return AddPro
// }

// 改进版
function Add() {
    const nums = [...arguments];
    function AddFn() {
        nums.push(...arguments);
        return AddFn
    }
    AddFn.sum = function () {
        return nums.reduce((acc,cur) => acc + cur)
    }
    return AddFn;
}

// 如果使用的是箭头函数的话，arguments是父作用域的arguments，所以是3*(1+2+3)
function Add() {
    const nums = [...arguments];
    return () => {
        nums.push(...arguments);
        return () => {
            nums.push(...arguments);
            return nums.reduce((a, b) => a + b);
        };
    };
}
let x = Add(1,2,3)(4,5)()
console.log(x)



