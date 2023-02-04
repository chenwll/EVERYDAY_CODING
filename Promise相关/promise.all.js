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

Promise.all = function (iterator) {
    return new Promise((resolve, reject) => {
        let cnt = 0;
        let res = [];
        for(let i = 0; i < iterator.length; i++) {
            Promise.resolve(iterator[i]).then((data) => {
                res[i] = data;
                if(++cnt === iterator.length) resolve(res)
            },(err) => {
                reject(err)
            })
        }
    })
}
