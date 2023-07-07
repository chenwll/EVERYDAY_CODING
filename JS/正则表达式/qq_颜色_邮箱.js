//手机号 11位, 以1开头
let reg1 = /^1[3456789]\d{9}/g
let str1 = '15928229999'
console.log(reg1.test(str1));

//判断QQ号
const reg2 = /^[1-9]\d{4,}$/g;

// 颜色
const reg3 = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;

// 邮箱
const reg4 = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;