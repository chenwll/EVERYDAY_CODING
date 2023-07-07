// replace返回一个新的字符串,没有改变原有的字符串
// toLowerCase() 
let str = "QIANDUANGOngchengshi猕猴桃Jquery很帅！哈哈 haha";

let s = str.replace(/[a-zA-Z]/g,(content) => {
    return content.toLowerCase() === content? content.toUpperCase() : content.toLowerCase()
})

console.log(s);

