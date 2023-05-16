https://leetcode.cn/problems/add-strings/description/

function add(a , b) {
    let res = "";
    let tmp = 0;
    for(let i = a.length - 1, j = b.length - 1; i >= 0|| j >= 0; i--,j--) {
        if (i >= 0) tmp += a[i] - '0';
        if (j >= 0) tmp += b[j] - '0';
        // 结果
        res += tmp % 10;
        // 进位
        tmp = Math.floor(tmp / 10);
    }
    if(tmp) res += tmp;
    return res.split('').reverse().join('');
}

let res = add("111","44448888888");
console.log(res)
