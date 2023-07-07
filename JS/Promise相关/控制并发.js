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