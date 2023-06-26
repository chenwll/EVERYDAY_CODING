// 首先定一个需要进行 promisify 的函数
function asyncFn(a, b, callback) {
  // 异步操作，使用 setTimeout 模拟
  console.log("异步请求参数", a, b);
  setTimeout(function () {
    callback(null,'data');
  }, 3000);
}


// 这个函数其实就是一个请求函数,我们可以通过回调函数来获取结果
function asyncFn(a,b,callback) {
    console.log('async请求的参数',a,b);
    setTimeout(() => {
        // callback是请求之后的回调函数,(err,data)
        callback(null,'data');
    }, 3000);
}

function promisify(func) {
    return function (...args) {
        return new Promise((resolve,reject) => {
            const callback = (err,data) => {
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            }
            func.call(this,...args,callback);
        })
    }
}


// 定义一个方法， 需要针对异步方法做封装，所以需要一个入参，既需要promisify的原异步方法

// 第一层, 要传入一个需要promisify的函数func
// function promisify(func) {
//     // func执行需要传参
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//         // 约定好第一个参数是err,第二个参数是data
//       const callback = (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       };
//       func.call(this, ...args, callback);
//     });
//   };
// }




// 我们希望调用的方式是
const proxy = promisify(asyncFn);
proxy(11, 22).then((res) => {
  // 此处输出异步函数执行结果
  console.log(res);
});