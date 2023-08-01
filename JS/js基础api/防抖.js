// 防抖动是将多次执行变为最后一次执行
// function debounce(fn ,time) {
//     let timerId = null;
//     return function (...args) {
//         if(timerId){
//             clearTimeout(timerId)
//         }
//         timerId = setTimeout(() => {
//             fn.apply(this,args);
//         },time)
//     }
// }


function debounce(fn, time) {
    let timer = null;
    return function (...args) {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this,args);
        },time)
    }
}

let obj = {}
obj.f = debounce(); // this -> obj
