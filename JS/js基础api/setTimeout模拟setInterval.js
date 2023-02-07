function mySetInterval(cb, time) {
    let timer = null;
    function fn() {
        cb();
        timer = setTimeout(fn, time);
    }
    timer = setTimeout(fn,time)
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}
// 测试
var a = mySetInterval(()=>{
    console.log(111);
},1000)
var b = mySetInterval(() => {
    console.log(222)
}, 1000)

// 终止定时器
a.cancel()
b.cancel()
