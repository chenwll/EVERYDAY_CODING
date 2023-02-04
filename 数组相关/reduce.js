// reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)

Array.prototype.myReduce = function (cb, init) {
    let arr = Array.prototype.slice.call(this);
    let start = init ? 0 : 1;
    let acc = init ? init : arr[0];
    for(let i = start; i < arr.length; i++) {
        acc = cb.call(null, acc, arr[i], i, this);
    }
    return acc;
}
let arr = [1,2,3,4,5]
let x = arr.myReduce((a,b) => a+ b);
console.log(x);
