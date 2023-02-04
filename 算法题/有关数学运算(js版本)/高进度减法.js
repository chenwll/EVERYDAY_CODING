/**
 *
 * @param a 被减数
 * @param b 减数
 */

function sub(a, b) {
    let t = 0;
    let res = "";
    for(let i = a.length - 1, j = b.length - 1; i >= 0|| j >= 0; i--,j--) {
        if(i >= 0) t = +a[i] - t;
        if(j >= 0) t -= +b[j];
        res += (t + 10) % 10;
        if(t < 0) t = 1;
        else t = 0;
    }
    while(res[res.length - 1] === '0' && res.length > 1) res = res.slice(0,res.length - 1);
    return res.split('').reverse().join('');
}

console.log(sub("55555","55544"))
