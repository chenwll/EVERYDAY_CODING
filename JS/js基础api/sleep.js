function sleep(time = 1000) {
    return new Promise(resolve => {
        let timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
            resolve(0);
        }, time);
    });
}


async function accomplishAsync() {
    await sleep(3000);
    console.log(1)
}

// accomplishAsync();

// 使用 promise来实现 sleep
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

sleep(1000).then(() => {
    // 这里写你的骚操作
})
