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

const AsyncFun = function (generator, ...params) {
    let itor = generator(...params);
    const next = x => {
        let {done, value} = itor.next(x);
        if(done) return;
        if(!(value instanceof  Promise)) value = Promise.resolve(value);
        value.then(next);
    }
    next()
}
AsyncFun(handle)
