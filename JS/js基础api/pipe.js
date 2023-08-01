// const pipe = (...args) => {
//     return function (x) {
//         args.reduce((acc,cur) => {
//             return acc(cur(x))
//         })
//     }
// }
function add4(num) {
    return num + 4
}

function multiply3(num) {
    return num*3
}

function divide2(num) {
    return num/2
}

// 使用展开符来获取数组格式的 pipe 参数
function pipe(...funcs) {
    // function callback(input, func) {
    //     return func(input)
    // }

    return function(param) {
        return funcs.reduce((input,func)=> {
            return func(input)
        },param)
    }
}


const compute = pipe(add4, multiply3, divide2)(10)
console.log(compute)
