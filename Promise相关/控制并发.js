// https://mp.weixin.qq.com/s/yWOPoef9ixuSBWApZQhjIg
// 要实现三个数组
// 待办的任务列表
// 正在执行的任务列表
// 已经完成的任务列表

// es7的实现
async function asyncPool(poolLimit, array, iteratorFn) {
    const ret  = [];
    const executing = [];
    for(let item of array) {
        // () => iteratorFn(item) 为了传递参数
        let p = Promise.resolve().then(()=>iteratorFn(item));
        // 存储所有的异步任务
        ret.push(p)
        if(array.length >= poolLimit) {
            const e = p.then(() => executing.splice(executing.indexOf(e), 1));
            executing.push(e);
            if(executing.length >= poolLimit){
                await Promise.race(executing);
            }
        }
    }
    return Promise.all(ret)
}


const message = new Array(100).fill("");
for (let i = 0; i < 100; i++) {
    message[i] = "第" + i + "条数据";
}
// 模拟请求一千条数据
function axiosGet(idx) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message[idx]);
        }, 1000 * Math.random());
    });
}
// async + promise
async function Process(max = 10) {
    let pools = [];
    let result = [];
    for (let i = 0; i < 100; i++) {
        let p = axiosGet(i).then((res) => {
            console.log(res);
            result.push(res);
            // 执行完成之后，就可以从pools数组中删除了
            pools.splice(pools.indexOf(p), 1);
        });
        pools.push(p);
        if (pools.length === max) {
            await Promise.race(pools);
        }
    }
    // 最后等pools数组中全部执行完成
    await Promise.allSettled(pools);
    return result;
}
Process().then((res) => {
    console.log(res);
});
