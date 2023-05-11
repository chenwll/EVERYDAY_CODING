// 生成器函数执行，返回一个可以迭代的对象
// 通过调用next方法，返回done和value,如果done是true的话直接return,否则通过value.next方法递归调用
// https://github.com/mqyqingfeng/Blog/issues/99
const delay = function (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`time = ${time}`)
        }, time)
    })
}

const handle = function * () {
    let value = yield delay(1000);
    console.log('第一个请求完成', value);

    value = yield delay(2000);
    console.log('第二个请求完成', value);

    value = yield delay(3000);
    console.log('第三个请求完成', value);
}

// 先第一次执行，得到一个迭代器对象
// 然后通过next方法继续调用，并返回结果{done,value}
// 如果done为true，直接结果，否则递归调用next方法

// 写一个自动执行函数
const AsyncFun = function (generator, ...params) {
    let itor = generator(...params);
    const next = x => {
        let {done, value} = itor.next(x);
        if(done) {
            return;
        }
        if(!(value instanceof  Promise)) value = Promise.resolve(value);
        value.then(next);
    }
    next()
}
AsyncFun(handle)
