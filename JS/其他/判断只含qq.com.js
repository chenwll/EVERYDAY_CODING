// https://github.com/sisterAn/blog/issues/88

function check(url) {
    let reg = /^http:\/\/w+\.qq\.com[^.]*$/g;
    if(reg.test(url)) return true;
    return false;
}
// console.log(new URL('https://www.qq.com/a/b?c=1').host==='www.qq.com')
console.log(
    check('http://www.baidu.com?redirect=http://www.qq.com/a'),
    check('http://www.qq.com'),
    check('http://www.qq.com.cn'),
    check('http://www.qq.com/a/b'),
    check('http://www.qq.com?a=1')
)

// true


// false


// true


// true

check('http://www.123qq.com?a=1')
// false

check('http://www.baidu.com?redirect=http://www.qq.com/a')
// true
