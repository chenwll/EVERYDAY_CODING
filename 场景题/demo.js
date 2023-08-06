function add(s1,s2) {
    const str1 = s1.split('').reverse().join('');
    const str2 = s2.split('').reverse().join('');
    console.log(str1,str2)
    let res = ""
    let tmp = 0;
    let i = 0,j = 0;
    for( ;i < str1.length&&j < str2.length; i++,j++) {
        tmp += Number(str1[i]) + Number(str2[j]);
        res += (tmp % 10);
        tmp = Math.floor(tmp / 10);
    }
    console.log(res,i,j)
    while(i  < str1.length) {
        tmp += Number(str1[i++]);
        res += ( tmp % 10);
        tmp = Math.floor(tmp / 10);
    }
    while(j < str2.length) {
        tmp += Number(str2[j++]);
        res += (tmp % 10);
        tmp = Math.floor(tmp / 10);
    }
    if(tmp) {
        res += tmp;
    }
    return res.split('').reverse().join('');
}

let res = add("269","888");
console.log(res)
