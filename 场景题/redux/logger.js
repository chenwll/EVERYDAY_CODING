// 阉割版的store
function logger(store) {
    // 调用Next方法执行下一个中间件,当是最后一个中间件的时候,就要执行reducer，即调用dispatch方法
    return function (next) {
        return function (action) {
            console.log('logger');
            next(action)
            console.log('logger afer');
        }
    }
}

// log thunk reduce thunk log