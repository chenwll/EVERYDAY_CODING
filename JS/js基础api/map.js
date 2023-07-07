const arr = [1,2,3];

Array.prototype.map = function (cb) {
    const res = [];
    for(let i = 0; i < arr.length; i++) {
        res.push(cb(this[i],i,this))
    }
    return res;
}

const res = arr.map((ele, index, arr) => {
    return ele * 2
})
console.log(res)