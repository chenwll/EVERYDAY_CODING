// 防抖动是将多次执行变为最后一次执行
function debounce(fn ,time) {
    let timerId = null;
    return function (...args) {
        if(timerId){
            clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
            fn.apply(this,args);
        },time)
    }
}
