/**
 *
 * @param _promises
 * @returns {Promise<unknown>}
 */
function promiseAll(_promises) {
    return new Promise((resolve, reject) => {
        let res = [];
        let cnt = 0;
        let arr = Array.from(_promises);
        for(let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i]).then((item)=> {
                res[i] = item;
                if(++cnt === arr.length) {
                    resolve(res);
                }
            }).catch(err => {
                reject(err)
            } )
        }
    })
}

// Promise.all = function (iterator) {
//     return new Promise((resolve, reject) => {
//         let cnt = 0;
//         let res = [];
//         for(let i = 0; i < iterator.length; i++) {
//             Promise.resolve(iterator[i]).then((data) => {
//                 res[i] = data;
//                 if(++cnt === iterator.length) resolve(res)
//             },(err) => {
//                 reject(err)
//             })
//         }
//     })
// }

// Promise.all = function (iterator) {
//     return new Promise((resolve,reject) => {
//         let cnt = 0;
//         let res = [];
//         for(let i = 0; i < iterator.length; i++) {
//             Promise.resolve(iterator[i]).then((data) => {
//                 res[i] = data;
//                 cnt++;
//                 if(cnt === iterator.length) {
//                     resolve(res);
//                 }
//             }).catch((err) => {
//                 reject(err)
//             })
//         }
//     })
// }

Promise.all = function (iterator) {
    let cnt = 0;
    let res = []
    return new Promise((resolve, reject) => {
        for(let i = 0; i < iterator.length; i++) {
            Promise.resolve(iterator[i]).then((data) => {
                cnt++;
                res[i] = data;
                if(cnt === iterator.length) {
                    resolve(res);
                }
            }).catch((err) => {
                reject(err)
            })
        }
    })
}

Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
    4,
]).then(
    (data) => {
      // data:[1,2,3,4]
      // 传递[pro1,pro2,pro3,4]的话:内部默认处理Promise.resolve(4)
      console.log("成功", data);
    },
    (reason) => {
      // reason:reason2
      console.log("失败", reason);
    }
  );