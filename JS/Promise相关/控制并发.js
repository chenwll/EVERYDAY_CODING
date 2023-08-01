// https://mp.weixin.qq.com/s/yWOPoef9ixuSBWApZQhjIg
// 要实现三个数组
// 待办的任务列表
// 正在执行的任务列表
// 已经完成的任务列表

// es7的实现
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

// async function asyncPoll(poolLimit,array,iteratorFn) {
//     const ret = [];
//     const executing = [];
//     for(let item of array) {
//         const p = Promise.resolve.then(() => iteratorFn(item));
//         ret.push(p);
//         if(array.length >= poolLimit) {
//             const e = p.then(() => executing.splice(executing.indexOf(e),1));
//             executing.push(e);
//             if(executing.length >= poolLimit) {
//                 await Promise.race(executing);
//             }
//         }
//     }
//     return Promise.all(ret);
// }




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

const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));
asyncPool(2, [1000, 5000, 3000, 2000], timeout);

// async + promise
// async function Process(max = 10) {
//     let pools = [];
//     let result = [];
//     for (let i = 0; i < 100; i++) {
//         let p = axiosGet(i).then((res) => {
//             console.log(res);
//             result.push(res);
//             // 执行完成之后，就可以从pools数组中删除了
//             pools.splice(pools.indexOf(p), 1);
//         });
//         pools.push(p);
//         if (pools.length === max) {
//             await Promise.race(pools);
//         }
//     }
//     // 最后等pools数组中全部执行完成
//     await Promise.allSettled(pools);
//     return result;
// }
// Process().then((res) => {
//     console.log(res);
// });



function asyncPool(poolLimit, array, iteratorFn) {
    let i = 0;
    const ret = []; // 存储所有的异步任务
    const executing = []; // 存储正在执行的异步任务
    const enqueue = function () {
      if (i === array.length) {
        return Promise.resolve();
      }
      const item = array[i++]; // 获取新的任务项
      const p = Promise.resolve().then(() => iteratorFn(item, array));
      ret.push(p);

      let r = Promise.resolve();

      // 当poolLimit值小于或等于总任务个数时，进行并发控制
      if (poolLimit <= array.length) {
        // 当任务完成后，从正在执行的任务数组中移除已完成的任务
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        if (executing.length >= poolLimit) {
          r = Promise.race(executing);
        }
      }

      // 正在执行任务列表 中较快的任务执行完成之后，才会从array数组中获取新的待办任务
      return r.then(() => enqueue());
    };
    return enqueue().then(() => Promise.all(ret));
  }

// 7/4日

async function asyncPool(arr,poolLimit,iteratorFn) {
  const ret = [];
  const executing = new Set();
  for(let item of arr) {
    const p = Promise.resolve().then(() => iteratorFn(item,arr));
    ret.push(p);
    executing.add(p);
    const clean = () => executing.delete(p);
    if(executing.size > poolLimit) {
      await Promise.race(executing);
    }
    p.then(clean).catch(clean);
  }
  return Promise.all(ret);
}

class Scheduler {
    constructor(max) {
        // 最大可并发任务数
        this.max = max;
        // 当前并发任务数
        this.count = 0;
        // 阻塞的任务队列
        this.queue = [];
    }

    async add(fn) {
        if (this.count >= this.max) {
            // 若当前正在执行的任务，达到最大容量max
            // 阻塞在此处，等待前面的任务执行完毕后将resolve弹出并执行
            await new Promise(resolve => this.queue.push(resolve));
        }
        // 当前并发任务数++
        this.count++;
        // 使用await执行此函数

        //执行传进来的函数 等待执行完，这是传的参数
        const res = await fn();
        // 执行完毕，当前并发任务数--
        this.count--;
        // 若队列中有值，将其resolve弹出，并执行
        // 以便阻塞的任务，可以正常执行
        this.queue.length && this.queue.shift()();
        // 返回函数执行的结果
        return res;
    }
}
const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const scheduler = new Scheduler(2);

const addTask = (time, val) => {
    scheduler.add(() => {
        return sleep(time).then(() => console.log(val));
    });
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// 2
// 3
// 1
// 4
