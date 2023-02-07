const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;

// (10 + 100) * 10 + 10 = 1110
compose(add10, mul10, add100)(10);

// 目标
// add100(mul10(add10(10)))
// (10 + 100) * 10 + 10 = 1110

// 递归写法
// function compose(...args){
//     let len = args.length - 1;
//     return function(x){
//         let result = args[len--](x);
//         if(len < 0){
//             return result;
//         }else{
//             return args[len](result);
//         }
//     }
// }


// 迭代写法
// function compose(...funs){
//     let len = funs.length - 1;
//     function callback(fn1,fn2){
//         return function(x){
//             return fn2(fn1(x))
//         }
//     }
//     let fn = funs[len];
//     for(let i = len - 1; i >= 0; i--){
//         fn = callback(fn,funs[i])
//     }
//     return fn;
// }

// 将迭代改写成reducer
function compose(...funs){
    if(funs.length === 0){
        return arg => arg
    }

    if(funs.length === 1){
        return funs[0]
    }
    return funs.reduceRight((a,b) => (...args)=>{
        return b(a(...args))
    })
}


// const compose = (...fns) =>
//   // 注意 f、g 的位置，如果实现从左到右计算，则置换顺序
//   fns.reduce(
//     (f, g) =>
//       (...args) =>
//         f(g(...args))
//   );



let x = compose(add10, mul10, add100)(10);
console.log(x);
