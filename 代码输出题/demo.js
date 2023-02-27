const arr = ['a', 'bc', 'def',{a:1}]

Array.prototype.toUpperCase = function () {
    const arr = Array.prototype.slice.call(this);
    arr.forEach((item,i) => {
       if(typeof item === 'object') {
           item.a = 2
       }
    })
    return arr
}

//输出： ['A','BC', 'DEF']
console.log(arr.toUpperCase())


