// 在规定的时间内，如果一个请求还没有返回结果，怎么进行超时的处理
// Promise.race

const api = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("111");
        }, 5000);
    });
};

const timing = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("timeout");
        }, 3000);
    });
};

function apiRace() {
    const arr = [api(),timing()]
    Promise.race(arr).then(res => {
        console.log(res)
    }).catch(e => {
        console.log(e)
    })
}

apiRace()
