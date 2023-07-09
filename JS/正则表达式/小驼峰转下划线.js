// 驼峰变成下划线
// userName -> user_name
const s = "userName";
const res = s.replace(/([a-z])([A-Z])/g,'$1_$2').toLowerCase();
// console.log(res);

//下划线变成驼峰
// \w 数字字母下划线
let str = 'hello-world-hhh'
const ans = str.replace(/-([a-z])/g,(content, $1) => {
    return $1.toUpperCase()
})
console.log(ans);


