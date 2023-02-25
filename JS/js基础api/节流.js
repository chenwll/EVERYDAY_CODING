// 时间戳的方式，第一次会执行
function throttle1(fn ,time) {
    let t1 = 0;
    return function (...args) {
        let t2 = new Date();
        if(t2 - t1 > time) {
            fn.apply(this,args);
            t1 = t2;
        }
    }
}

// document.addEventListener('scroll',throttle(scrollTest,3000))
// 定时器的方式，第一次触发不会执行，会等n秒之后才会执行
function throttle2(fn ,time) {
    let timer = null;
    return function (...args) {
        if(!timer){
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            },time)
        }
    }
}
