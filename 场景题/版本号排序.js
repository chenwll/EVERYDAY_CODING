let arr = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
// [ '4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ]
function cmp(a ,b) {
    let arr1 = a.split('.')
    let arr2 = b.split('.');
    for(let i = 0; i < a.length&& i < b.length; i++) {
        let x = +arr1[i];
        let y = +arr2[i];
        if(x === y) continue;
        if(x > y) return -1;
        else return 1;
    }
    return b.length - a.length ;
}

let res = arr.sort(cmp);
console.log(res)
