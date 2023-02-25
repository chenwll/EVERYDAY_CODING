Array.prototype.mySlice = function (start,end) {
    let res = []
    let st = start? start : 0;
    let en = end? end : this.length;
    for(let i = st; i < en; i++) {
        res.push(this[i]);
    }
    return res;
}

let arr = [1,2,3,4,5,6,7];

console.log(arr.slice(1,3))
console.log(arr.mySlice(1,3))
