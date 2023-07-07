const str = 'get-element-by-id ';
const res = str.replace(/-([a-z])/g,function (all,i) {
    return i.toUpperCase()
})
console.log(res)

// userName -> user_name
const s = "userName";
const r = s.replace(/([a-z])([A-Z])/g,'$1_$2').toLowerCase()
console.log(r);
