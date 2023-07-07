// reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#%E5%8F%82%E6%95%B0


Array.prototype.myReduce = function (cb,init) {
    let arr = Array.prototype.slice.call(this);
    let start = init? 0: 1;
    let acc = init? init:arr[0];
    for(let i = start; i < arr.length; i++) {
        acc = cb.call(null,acc,arr[i],i,this);
    }
    return acc;
}

Array.prototype.myReduce = function (cb,init) {
    let start = init? 0: 1;
    let arr = Array.prototype.slice.call(this);
    let acc = init? init: arr[0];
    for(let i = start; i < arr.length; i++) {
        acc = cb.call(null, acc, arr[i],i,this);
    }
    return acc;
}



let arr = [1,2,3,4,5]
let x = arr.myReduce((a,b) => a+ b);
console.log(x);
