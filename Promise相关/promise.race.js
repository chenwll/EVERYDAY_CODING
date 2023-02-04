function delay(fn, seconds, ...args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Promise.resolve(fn(...args)).then(res => resolve(res))
        },seconds)
    })
}

function print(val) {
    return val;
}

function race(_promise) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < _promise.length; i++) {
            Promise.resolve(_promise[i]).then((res)=>{
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        }
    })
}

let testArr = [delay(print,3000,4) ,delay(print,5000,7)];
// console.log(Array.isArray(testArr));
let p = race(testArr);
// console.log(p);
setTimeout(function () {
    console.log("the stack is now empty");
    console.log(p);
},6000);


// 2023/2/1
Promise.race = function (iterators) {
    return new Promise((resolve, reject) => {
        for (const iter of iterators) {
            Promise.resolve(iter)
                .then((res) => {
                    resolve(res);
                })
                .catch((e) => {
                    reject(e);
                });
        }
    });
};
