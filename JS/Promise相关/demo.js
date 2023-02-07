function fn(){
    console.log('two')
}

setTimeout(function () {
    console.log('three');
}, 0);

Promise.resolve().then(() => fn());
// let p = Promise.resolve().then(fn);
// p 是一个Promise

console.log('one');


const set = new Set([1,2,3,4,5])
for(let [key,value] of set.entries()) {
    console.log(key,value)
}

// 如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
Promise.resolve(Promise.reject('123')).then((data)=>{
    console.log(data)
}).catch((data)=>{
    console.log('err',data)
})
