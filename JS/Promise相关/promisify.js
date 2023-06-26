// 首先定一个需要进行 promisify 的函数
function asyncFn(a, b, callback) {
  // 异步操作，使用 setTimeout 模拟
  console.log("异步请求参数", a, b);
  setTimeout(function () {
    callback();
  }, 3000);
}

// 我们希望调用的方式是


// 定义一个方法， 需要针对异步方法做封装，所以需要一个入参，既需要promisify的原异步方法
function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const callback = (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      };
      func.call(this, ...args, callback);
    });
  };
}

const proxy = promisify(asyncFn);
proxy(11, 22).then((res) => {
  // 此处输出异步函数执行结果
  console.log(res);
});