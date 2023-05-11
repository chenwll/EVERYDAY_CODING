const str = 'get-element-by-id ';
const res = str.replace(/-([a-z])/g,function (all,i) {
    return i.toUpperCase()
})
console.log(res)
