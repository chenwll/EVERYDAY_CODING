// let str = '点头yes摇头no，要说你好喊hello！';
// str = str.replace(/[a-z]+/ig, (cnt)=>{
//     return " " + cnt + " ";
// }).trim();
//
// console.log(str); // => 点头 yes 摇头 no ，要说你好喊 hello！

// 写一个方法，传入模板和内容后，输出正确的文本
let template = '我是一名{{defaultgrade}}学生，我的名字叫{{defaultname}}'
let content = {defaultgrade:'初中',defaultname:'张三'}

const replaceStr = (template,content) => {
    const res = template.replace(/{{(\w+)}}/g,(con,$0) => {
        console.log(con)
        return content[$0]
    })
    return res;
}

const str = replaceStr(template,content)
console.log(str)
