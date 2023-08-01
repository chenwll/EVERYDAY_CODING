const add1 = (x) => x + 1100;
const add10 = (x) => {
    return x + 10;
};
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;

// 写法一，递归
function compose1(...args) {
    let len = args.length - 1;
    let res = undefined;
    return function fn(x) {
        if(len < 0) {
            return res;
        }else {
            // 在当前层要执行最后一个函数的计算
            res = args[len--](x);
            // 计算完成之后要将结果返回给下一个函数再进计算
            return fn(res)
        }
    }
}

function compose(...args) {
    let len = args.length - 1;
    let res = undefined;
    return function fn(x) {
        if(len < 0){
            return res;
        }
        res = args[len--](x);
        return fn(res)
    }
}


function composeMy(...args) {
    let len = args.length - 1;
    let res;
    return function fn(x) {
        if(len < 0) {
            return res;
        }else {
            res = args[len--](x);
            return fn(res);
        }
    }
}

function myCompose(...args) {
    // let res;
    let len = args.length - 1;
    return function (x) {
        let res = x;
        while(len) {
            res = args[len--](res)
        }
        return res;
    }
}


// 写法二，迭代
function compose2(...args) {
    let len = args.length - 1;
    // x表示接受同样的参数
    return function (x) {
        let res = x;
        while(len >= 0) {
            // 函数执行并传参，用res来表示参数
            res = args[len--](res)
        }
        return res;
    }
}


function compose2(args) {
    return function (x) {
        let len = args.length - 1;
        let res = x;
        while(len >= 0) {
            res = args[len--](res);
        }
        return res;
    }
}


// 写法三，reduce
function compose3(...args) {
    return args.reduce((acc,cur) => {
        return function (x){
            return cur(acc(x))
        }
    })
}


function compose3(...args) {
    return args.reduce((pre,cur) => {
        return function (x) {
            return cur(pre(x))
        }
    })
}

let x = myCompose(add10, mul10,add100)(10);
console.log(x);
