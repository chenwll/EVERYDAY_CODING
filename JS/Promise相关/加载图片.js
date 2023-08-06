const schedule = async (tasks,limit) => {
    const taskPool = new Set();
    for(let task of tasks) {
        const promise = task();
        taskPool.add(Promise.resolve(promise));
        promise.then(() => taskPool.delete(promise));
        if(taskPool.size >= limit) {
            await Promise.race(taskPool)
        }
    }
    return Promise.all(taskPool)
}

function getTasks(urls) {
    const tasks = [];
    urls.forEach(url => {
        tasks.push(() => {
            return new Promise((resolve,reject) => {
                const img = new Image();
                img.onload = () => {
                    resolve()
                };
                img.src = url;
            })
        })
    })
    return tasks
}


// 并发数量  参数数组  请求函数
async function asyncPool(poolLimit, array, iteratorFn) {
    const ret  = [];
    // 存储正在执行的异步任务
    const executing = [];
    for(let item of array) {
        // () => iteratorFn(item) 为了传递参数
        let p = Promise.resolve().then(()=>iteratorFn(item));
        // 存储所有的异步任务
        ret.push(p)
        // 超出了限制
        if(array.length >= poolLimit) {
            // 当任务完成后，从正在执行的任务数组中移除已完成的任务
            const e = p.then(() => executing.splice(executing.indexOf(e), 1));
            executing.push(e);
            if(executing.length >= poolLimit){
                await Promise.race(executing);
            }
        }
    }
    return Promise.all(ret)
}
